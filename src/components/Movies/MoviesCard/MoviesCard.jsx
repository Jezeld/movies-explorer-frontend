import React from "react";
import "./MoviesCard.css";

function MoviesCard(props) {
  const { movie } = props;
  return (
    <section className="moviesCard">
      <img className="moviesCard__image" src={movie.image} alt={movie.name} />
      <div className="moviesCard__name">
        <div className="moviesCard__name_text-content">
          <h2 className="moviesCard__name_text-content_title">{movie.nameRU}</h2>
          <span className="moviesCard__name_text-content_time">{movie.duration}</span>
        </div>
        <button className="moviesCard__name_like"></button>
      </div>
    </section>
  );
}

export default MoviesCard;