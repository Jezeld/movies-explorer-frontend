import React from "react";
import "./SearchForm.css";

function SearchForm() {
  return (
    <section className="search" aria-label="поиск">
      <form className="form-search">
        <input
          required
          type="text"
          name="movie"
          className="form-search__input"
          placeholder="Фильм"
        ></input>
        <button className="form-search__button" type="submit" aria-label="Поиск фильмов"/>
        <div className="form-checkbox">
        <label>
        <input type="checkbox" className="form-checkbox__button" name="short-film" />
        <span className="form-checkbox__slider-btn"></span>
          </label>
        <span className="form-checkbox__span">Короткометражки</span>
      </div>
      </form>
    </section>
  );
}

export default SearchForm;
