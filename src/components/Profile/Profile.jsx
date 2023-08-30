import React from "react";
import "./Profile.css";
import { Link } from "react-router-dom";

function Profile() {
  return (
    <section className="profile">
      <h2 className="profile__title"> Привет, Виталий!</h2>
      <form className="profile-form">
        <div className="profile-form__item profile-form__item-one">
          <label className="profile-form__label">Имя</label>
          <input
            className="profile-form__input"
            placeholder="Виталий"
            required
            minLength="1"
            maxLength="30"
            name="user"
            type="text"
          ></input>
        </div>
        <div className="profile-form__item ">
          <label className="profile-form__label">E-mail</label>
          <input
            className="profile-form__input"
            placeholder="pochta@yandex.ru"
            required
            minLength="1"
            maxLength="30"
            name="email"
            type="email"
          ></input>
        </div>
        <button className="profile-form__button" type="button">
          Редактировать
        </button>
      </form>
      <Link className="profile__link" to="/signin">
        <button className="profile__button-exit" type="button">
          Выйти из аккаунта
        </button>
      </Link>
    </section>
  );
}

export default Profile;
