import React from "react";
import SearchForm from "../Movies/SearchForm/SearchForm";
import {moviesListSaved} from "../../utils/constants";
import MoviesCard from "../Movies/MoviesCard/MoviesCard";
import "./SavedMovies.css";

function SavedMovies() {
  return (
    <section className="savedMovies">
      <SearchForm />
      <section className="moviesCardList">
      {moviesListSaved.map((movie) => {
            return (
              <MoviesCard
                movie={movie}
                key={movie.movieId}
              />
            );
          })}
          </section>
    </section>
  );
}

export default SavedMovies;