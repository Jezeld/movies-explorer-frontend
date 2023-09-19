import React from "react";
import SearchForm from "../Movies/SearchForm/SearchForm";
import MoviesCardList from "../Movies/MoviesCardList/MoviesCardList";
import "./SavedMovies.css";
import { useState, useEffect } from "react";
import { mainApi } from "../../utils/MainApi";

function SavedMovies({
  saveMovies,
  setSaveMovies,
  handleCardDelete,
}) {
  const [querySave, setQuerySave] = useState("");
  const [shortSave, setShortSave] = useState(false);
  const [isSucces, setisSucces] = useState(false);

  const refreshMoviesSave = (saveMovies) => {
    setSaveMovies(saveMovies);
    localStorage.setItem("findMoviesSave", JSON.stringify(saveMovies));
  };

  const refreshSearchQuerySave = (querySave) => {
    setQuerySave(querySave);
    localStorage.setItem("querySave", querySave);
  };

  const refreshShortMovieSave = (shortSave) => {
    setShortSave(shortSave);
    localStorage.setItem("shortSave", JSON.stringify(shortSave));
  };

  useEffect(() => {
    refreshMoviesSave(
      JSON.parse(localStorage.getItem("findMoviesSave") || "[]")
    );
    refreshSearchQuerySave(localStorage.getItem("querySave") || "");
    refreshShortMovieSave(
      JSON.parse(localStorage.getItem("shortSave") || "false")
    );
    mainApi
      .getSavedMovies()
      .then((movies) => {
        refreshMoviesSave(movies);
      })
      .catch((error) => {
        console.log(`Ошибка: ${error}`);
      });
  }, []);

  const findMoviesByName = (saveMovies, key = "") => {
    const wordByLowerCase = key.toLowerCase();
    const filterMovie = saveMovies.filter((movie) =>
      key ? movie.nameRU.toLowerCase().includes(wordByLowerCase) : true
    );
    return filterMovie.sort((a, b) => {
      if (a.nameRU < b.nameRU) return -1;
      if (a.nameRU > b.nameRU) return 1;
      return 0;
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const filtereSavedMovies = JSON.parse(localStorage.getItem("findMoviesSave") || "[]");

    const filteredMovies = findMoviesByName(filtereSavedMovies, querySave);
    setSaveMovies(filteredMovies);
    console.log('filteredMovies', filteredMovies);
    setisSucces(true);

  };

  const handleByShortSaveCeckbox = (shortSave) =>{
const filteredMovies = findMoviesByName(saveMovies, querySave);
    setSaveMovies(filteredMovies);
    refreshShortMovieSave(shortSave);
  }

  return (
    <section className="savedMovies" aria-label="сохраненные фильмы">
      <SearchForm
        short={shortSave}
        onSubmit={handleSubmit}
        refreshSearchQuery={refreshSearchQuerySave}
        refreshShortMovie={handleByShortSaveCeckbox}
      />
      {!saveMovies ? null : (
        <MoviesCardList
          movies={saveMovies.filter(
            (movie) => !shortSave || movie.duration <= 40
          )}
          short={shortSave}
          isSucces={isSucces}
          saveMovies={saveMovies}
          query={querySave}
          handleCardDelete={handleCardDelete}
        />
      )}
    </section>
  );
}

export default SavedMovies;
