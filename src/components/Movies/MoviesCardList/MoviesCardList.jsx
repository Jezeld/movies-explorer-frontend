import React from "react";
import "./MoviesCardList.css"
import MoviesCard from "../MoviesCard/MoviesCard";
// import {moviesList} from "../../../utils/constants";

function MoviesCardList({movies}) {
  return(
    <section className="moviesCardList" aria-label="article">
      <ul className="moviesCardList-grid">
           {movies.map((movie) => (
          <MoviesCard key={movie.id} movie={movie}/>
        ))}
        </ul>
    </section>
  )
}
export default MoviesCardList;