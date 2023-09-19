import React from "react";
import "./SearchForm.css";

function SearchForm({
  short,
  refreshShortMovie,
  refreshSearchQuery,
  onSubmit,
  query,
}) {
  return (
    <section className="search" aria-label="поиск">
      <form onSubmit={onSubmit} noValidate className="form-search">
        <input
          required
          type="text"
          name="search"
          className="form-search__input"
          placeholder="Фильм"
          value={query}
          onChange={(e) => refreshSearchQuery(e.target.value)}
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
              checked={short}
              onChange={() => {
                refreshShortMovie(!short);
              }}
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
