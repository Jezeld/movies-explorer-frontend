import React from "react";
import { useState, useEffect } from 'react';
import "./Movies.css";
import Preloader from "../Movies/Preloader/Preloader";
import SearchForm from "./SearchForm/SearchForm";
import MoviesCardList from "./MoviesCardList/MoviesCardList";

function Movies({movies, saveMovies, handleLikeMovie, findAllMovies, shortMovies, isLoading}) {

  const [values, setValues] = useState(JSON.parse(localStorage.getItem('findMovies')) || {
    search: '',
    shorts: false,
  });

  useEffect(() => {
    localStorage.setItem('findMovies', JSON.stringify(values))
  }, [values]);

  function searchShortMovies(data) {
    console.log('data', data)
    const newValues = {
      ...data,
      shorts: data.shorts,
    };

    shortMovies(newValues);
    setValues(newValues);
  }

  function searchAllMovies(data) {
    return findAllMovies(data)
      .then(() => {
        setValues(data);
      });
  }

  return(
    <section className="movies">
      <SearchForm searchShortMovies={searchShortMovies}  searchAllMovies={searchAllMovies} stateValues={values}/>
      {isLoading ? (
          <Preloader />
        ) : (
          <MoviesCardList movies={movies} saveMovies={saveMovies} handleLikeMovie={handleLikeMovie}/>
        )}
    </section>
  )
}

export default Movies;
