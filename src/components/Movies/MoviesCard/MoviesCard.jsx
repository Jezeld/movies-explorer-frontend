import React from "react";
import "./MoviesCard.css";
import { useState } from "react";
import { useLocation, Link } from "react-router-dom";
import moviesApi from "../../../utils/MoviesApi";

function MoviesCard({ movie, saveMovies, handleLikeMovie, handleCardDelete }) {
  const location = useLocation();
  const trashFilms = location.pathname === "/saved-movies";
  const [isShown, setIsShown] = useState(false);

  const isLiked = saveMovies
    ? saveMovies.some((item) => item.movieId === movie.id)
    : false;

  const handleSaveMovie = () => {
    handleLikeMovie(movie);
  };

  const handleMovieDelete = () => {
    handleCardDelete(movie);
  };

  return (
    <li
      className="moviesCard"
      onMouseEnter={() => setIsShown(true)}
      onMouseLeave={() => setIsShown(false)}
    >
      <article>
        <Link target="_blank" to={movie.trailerLink}>
          <img
            className="moviesCard__image"
            src={
              movie.image.url
                ? moviesApi._baseUrl + movie.image.url
                : movie.image
            }
            alt={movie.nameRU}
          />
        </Link>
        <div className="moviesCard__name">
          <div className="moviesCard__text-content">
            <h2 className="moviesCard__title">{movie.nameRU}</h2>
            <span className="moviesCard__time">
              {Math.floor(movie.duration / 60)}ч {movie.duration % 60}м
            </span>
          </div>
          {!trashFilms && (
            <button
              className={`moviesCard__like ${
                isLiked ? "moviesCard__like_active" : ""
              } `}
              type="button"
              aria-label="нравиться"
              onClick={handleSaveMovie}
            ></button>
          )}
          {isShown && trashFilms && (
            <button
              className="moviesCard__delete"
              type="button"
              aria-label="удалить"
              onClick={handleMovieDelete}
            ></button>
          )}
        </div>
      </article>
    </li>
  );
}

export default MoviesCard;
