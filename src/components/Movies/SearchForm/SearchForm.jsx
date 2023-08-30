import React from "react";
import "./SearchForm.css";

function SearchForm() {
  return (
    <section className="search">
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
        <button className="form-checkbox__button" type="button" />
        <span className="form-checkbox__span">Короткометражки</span>
      </div>
      </form>
    </section>
  );
}

export default SearchForm;
