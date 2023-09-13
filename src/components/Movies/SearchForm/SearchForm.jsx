import React from "react";
import "./SearchForm.css";
import { useState } from "react";

function SearchForm({ searchAllMovies, stateValues, searchShortMovies }) {
  const [values, setValues] = useState(stateValues);

  function handleInputSearch(e) {
    setValues({
      ...values,
      search: e.target.value,
    });
  }

  function findMoviesByName() {
    searchAllMovies(values).catch((error) => console.log(`Ошибка: ${error}`));
  }

  function handleSubmit(e) {
    e.preventDefault();
    findMoviesByName();
  }

  function handleInputShort(e) {
    const newValues = {
      ...values,
      shorts: e.target.checked,
    };
    setValues(newValues);
    searchShortMovies(newValues);
  }

  return (
    <section className="search" aria-label="поиск">
      <form onSubmit={handleSubmit} noValidate className="form-search">
        <input
          required
          type="text"
          name="search"
          className="form-search__input"
          placeholder="Фильм"
          value={values.search}
          onChange={handleInputSearch}
        ></input>
        <button
          className="form-search__button"
          type="submit"
          aria-label="Поиск фильмов"
        />
        <div className="form-checkbox">
          <label>
            <input
              type="checkbox"
              checked={values.shorts}
              onChange={handleInputShort}
              className="form-checkbox__button"
              name="short-film"
            />
            <span className="form-checkbox__slider-btn"></span>
          </label>
          <span className="form-checkbox__span">Короткометражки</span>
        </div>
      </form>
    </section>
  );
}

export default SearchForm;
