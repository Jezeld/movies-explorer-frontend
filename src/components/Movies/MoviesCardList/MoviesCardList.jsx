import React from "react";
import "./MoviesCardList.css"
import MoviesCard from "../MoviesCard/MoviesCard";
import {moviesList} from "../../../utils/constants";

function MoviesCardList() {
  return(
    <section className="moviesCardList">
      {moviesList.map((movie) => {
            return (
              <MoviesCard
                movie={movie}
                key={movie.movieId}
              />
            );
          })}
    </section>
  )
}
export default MoviesCardList;