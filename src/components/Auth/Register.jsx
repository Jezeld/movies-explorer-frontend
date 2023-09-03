import React, { useEffect } from "react";
import "./Auth.css";
import { Link } from "react-router-dom";
import useValidation from "../../hooks/useValidation";
import logo from "../../images/logo.svg";

const Register = () => {
  const { values, handleChange, errors, isValid, resetForm } = useValidation();

  useEffect(() => {
    resetForm();
  }, [resetForm]);

  const submitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <section className={"Auth"}>
        <div className={"Auth__wrapper"}>
          <Link to="/">
            <img src={logo} alt="логотип" />
          </Link>
          <h1 className={"Auth__title"}>Добро пожаловать!</h1>
          <form
            className={"Auth__form"}
            onSubmit={(e) => {
              submitHandler(e);
            }}
            id={"register"}
          >
            <label className={"Auth__label"}>
              <span className={"Auth__txt"}>Имя</span>
              <input
                onChange={(e) => {
                  handleChange(e);
                }}
                value={values.name || ""}
                className={"Auth__input"}
                type={"text"}
                name={"name"}
                minLength={4}
                required={true}
                placeholder="Виталий"
              />
              <span className={"Auth__error"}>{errors.name}</span>
            </label>

            <label className={"Auth__label"}>
              <span className={"Auth__txt"}>E-mail</span>
              <input
                onChange={(e) => {
                  handleChange(e);
                }}
                value={values.email || ""}
                className={"Auth__input"}
                type={"email"}
                name={"email"}
                minLength={4}
                required={true}
                placeholder="pochta@yandex.ru"
              />
              <span className={"Auth__error"}>{errors.email}</span>
            </label>
            <label className={"Auth__label"}>
              <span className={"Auth__txt"}>Пароль</span>
              <input
                onChange={(e) => {
                  handleChange(e);
                }}
                value={values.password || ""}
                className={
                  errors.password
                    ? "Auth__input Auth__input_error"
                    : "Auth__input"
                }
                type={"password"}
                name={"password"}
                minLength={8}
                required={true}
                placeholder={"•••••••••••••"}
              />
              <span className={"Auth__error"}>{errors.password}</span>
            </label>
            <button
              type={"submit"}
              className={"Auth__btn"}
              disabled={!isValid}
            >
              Зарегистрироваться
            </button>
          </form>
          <div className={"Auth__notation"}>
            <p className={"Auth__notation-txt"}>Уже зарегистрированы?</p>
            <Link to={"/signin"} className={"Auth__link"}>
              Войти
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Register;
