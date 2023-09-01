import React from "react";
import "./Movies.css";
import SearchForm from "./SearchForm/SearchForm";
import MoviesCardList from "./MoviesCardList/MoviesCardList";
import {moviesList} from "../../utils/constants";


function Movies() {
  return(
    <section className="movies">
      <SearchForm />
      <MoviesCardList movies={moviesList}/>
          <div className="addMovies">
      <button className="addMovies__button" type="button">Ещё</button>
    </div>
    </section>
  )
}

export default Movies;