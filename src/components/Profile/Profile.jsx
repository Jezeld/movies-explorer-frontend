import React, { useState, useEffect, useContext } from "react";
import "./Profile.css";
import { Link } from "react-router-dom";
import useValidation from "../../hooks/useValidation";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

function Profile({
  isMessageApi,
  signOut,
  handleUpdateProfile,
  setIsMessageApi,
  textMessage,
  setSaveMessage,
}) {
  const { isValid, values, errors, handleChange, setValues, resetForm } =
    useValidation();

  const { currentUser } = useContext(CurrentUserContext);

  useEffect(() => {
    resetForm();
  }, [resetForm]);

  useEffect(() => {
    setValues({
      name: currentUser.name,
      email: currentUser.email,
    });
  }, [setValues, currentUser.name, currentUser.email]);

  function handleSubmit(e) {
    e.preventDefault();
    const { name, email } = values;
    handleUpdateProfile({ name, email });
    setIsSuccess(false);
  }

  const [isInputActive, setIsInputActive] = useState(false);
  const [isSuccess, setIsSuccess] = useState();

  const buttonIsValid =
    isValid &&
    (values.name !== currentUser.name || values.email !== currentUser.email);

    const handleEdit = () => {
      setIsSuccess(true);
        setIsInputActive(true);
                setIsMessageApi("");
                setSaveMessage({
                  textMessage: '',
                });
    };

  return (
    <section className="profile">
      <h2 className="profile__title">Привет, {currentUser.name}!</h2>
      <form className="profile-form" onSubmit={handleSubmit}>
        <div className="profile-form__item profile-form__item-one">
          <label className="profile-form__label">Имя</label>
          <input
            className="profile-form__input"
            required
            minLength="2"
            maxLength="30"
            name="name"
            placeholder={currentUser.name}
            value={values.name ? values.name : ""}
            onChange={handleChange}
            disabled={!isInputActive}
          ></input>
           <span
            className={`profile__span`}
          >
          {errors.name}
          </span>
        </div>
        <div className="profile-form__item ">
          <label className="profile-form__label">E-mail</label>
          <input
            className="profile-form__input"
            required
            minLength="4"
            maxLength="30"
            name="email"
            type="email"
            placeholder={currentUser.email}
            value={values.email ? values.email : ""}
            onChange={handleChange}
            disabled={!isInputActive}
          ></input>
           <span
            className={`profile__span`}
          >
{errors.email}
          </span>
        </div>
        <span className="profile-form__error-message">{isMessageApi}</span>
        <span className="profile-form__message">{textMessage}</span>
        { isSuccess ? (
          <button
            className={
              buttonIsValid
                ? "profile-form__button_save"
                : "profile-form__button_save profile-form__button_disabled"
            }
            disabled={!buttonIsValid}
          >
            Сохранить
          </button>
        ) : (
          <>
            <button
              className={"profile-form__button"}
              onClick={handleEdit}>
              Редактировать
            </button>
            <Link to="/" className={"profile__link"} onClick={signOut}>
              Выйти из аккаунта
            </Link>
          </>
        )}
      </form>
    </section>
  );
}

export default Profile;
