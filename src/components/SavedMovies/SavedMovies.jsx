import React from "react";
import SearchForm from "../Movies/SearchForm/SearchForm";
import {moviesListSaved} from "../../utils/constants";
// import MoviesCard from "../Movies/MoviesCard/MoviesCard";
import MoviesCardList from "../Movies/MoviesCardList/MoviesCardList";
import "./SavedMovies.css";

function SavedMovies() {
  return (
    <section className="savedMovies">
      <SearchForm />
             <MoviesCardList movies={moviesListSaved}/>
    </section>
  );
}

export default SavedMovies;