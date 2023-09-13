import React from "react";
import SearchForm from "../Movies/SearchForm/SearchForm";
import MoviesCardList from "../Movies/MoviesCardList/MoviesCardList";
import "./SavedMovies.css";
import { useState, useEffect } from "react";
import { findMoviesName, findMoviesTime } from "../../utils/constants";

function SavedMovies({ saveMovies, handleCardDelete }) {
  const [values, setValues] = useState({
    search: "",
    shorts: false,
  });
  const [movies, setMovies] = useState(saveMovies);

  function updateMovies(values) {
    const allMovies = findMoviesName(saveMovies, values.search);
    const filteredMovies = values.shorts
      ? findMoviesTime(allMovies)
      : allMovies;

    setMovies(filteredMovies);
  }

  function searchAllMovies(values) {
    updateMovies(values);
    setValues(values);
    return Promise.resolve();
  }

  function searchShortMovies(_values) {
    const newValues = {
      ...values,
      shorts: _values.shorts,
    };

    updateMovies(newValues);
    setValues(newValues);
  }

  useEffect(() => {
    updateMovies(values);
  }, [saveMovies]);

  return (
    <section className="savedMovies" aria-label="сохраненные фильмы">
      <SearchForm
        searchShortMovies={searchShortMovies}
        searchAllMovies={searchAllMovies}
        stateValues={values}
      />
      {!movies ? null : (
        <MoviesCardList movies={movies} handleCardDelete={handleCardDelete} />
      )}
    </section>
  );
}

export default SavedMovies;
