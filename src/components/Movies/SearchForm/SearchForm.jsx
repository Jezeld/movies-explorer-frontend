import React from "react";
import "./SearchForm.css";

function SearchForm() {
  return (
    <section className="search">
      <form className="form">
        <input
          required
          type="text"
          name="movie"
          className="form__input"
          placeholder="Фильм"
        ></input>
        <button className="form__button" type="submit" />
        <div className="form__checkbox">
        <button className="form__checkbox-button" type="button" />
        <span className="form__checkbox_span">Короткометражки</span>
      </div>
      </form>
    </section>
  );
}

export default SearchForm;
