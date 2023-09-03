
import React, { useState } from "react";
import "./Profile.css";
import { Link } from "react-router-dom";
import useValidation from "../../hooks/useValidation";

function Profile() {
  const [isEditActive, setIsEditActive] = useState(false);
  const handleSubmit = e => {
    e.preventDefault();
    setIsEditActive(false);
  };
  const { values, handleChange } = useValidation();

  const button = isEditActive ? (
    <button
      type={"submit"}
      className={"profile-form__button  profile-form__button_save"}
      onClick={() => setIsEditActive(false)}
    >
      Сохранить
    </button>
  ) : (
    <button
      type={"button"}
      className={"profile-form__button"}
      onClick={() => setIsEditActive(true)}
    >
      Редактировать
    </button>
  );
  return (
    <section className="profile">
      <h2 className="profile__title"> Привет, Виталий!</h2>
      <form className="profile-form"  onSubmit={e => {
            handleSubmit(e);
          }}
          >
        <div className="profile-form__item profile-form__item-one">
          <label className="profile-form__label">Имя</label>
          <input
            className="profile-form__input"
            placeholder="Виталий"
            required
            minLength="1"
            maxLength="30"
            name="name"
            type="text"
            onChange={e => handleChange(e)}
            value={values.name || ""}
          ></input>
        </div>
        <div className="profile-form__item ">
          <label className="profile-form__label">E-mail</label>
          <input
            className="profile-form__input"
            placeholder="pochta@yandex.ru"
            required
            minLength="4"
            maxLength="30"
            name="email"
            type="email"
            onChange={e => handleChange(e)}
                  value={values.email || ""}
          ></input>
        </div>
      {button}
      <Link  className={ !isEditActive ? "profile__link" : "profile__link-none"} to="/signin">
          Выйти из аккаунта
      </Link>
      </form>
    </section>
  );
}

export default Profile;
