import React, { useEffect } from "react";
import "./Auth.css";
import { Link } from "react-router-dom";
import useValidation from "../../hooks/useValidation";
import logo from "../../images/logo.svg";

const Login = ({ onLogin, isMessageApi, setIsMessageApi }) => {
  const { values, handleChange, errors, isValid, resetForm, isDisabled } =
    useValidation({ email: "", password: "" });

  function handleSubmit(e) {
    e.preventDefault();
    onLogin(values.email, values.password);
  }
  useEffect(() => {
    resetForm();
  }, [resetForm]);

  return (
    <>
      <section className={"Auth"}>
        <div className={"Auth__wrapper"}>
          <Link to="/">
            <img src={logo} alt="логотип" />
          </Link>
          <h1 className={"Auth__title"}>Рады видеть!</h1>
          <form
            name={`signin`}
            className={"Auth__form"}
            onSubmit={handleSubmit}
            id={"login"}
            noValidate
          >
            <label className={"Auth__label"}>
              <span className={"Auth__txt"}>E-mail</span>
              <input
                onChange={handleChange}
                value={values.email || ""}
                className={"Auth__input"}
                type={"email"}
                name={"email"}
                minLength={5}
                required={true}
                placeholder="Email"
              />
              <span className={"Auth__error"}>{errors.email}</span>
            </label>
            <label className={"Auth__label"}>
              <span className={"Auth__txt"}>Пароль</span>
              <input
                onChange={handleChange}
                value={values.password || ""}
                className={"Auth__input"}
                type={"password"}
                name={"password"}
                minLength={6}
                maxLength={40}
                required={true}
                placeholder="Пароль"
              />
              <span className={"Auth__error"}>{errors.password}</span>
            </label>
            <span className={"Auth__error-server"}>{isMessageApi}</span>
            <button
              type={"submit"}
              className={`Auth__btn Auth__btn_margin ${
                !isValid || isDisabled ? "Auth__btn_disabled" : ""
              }`}
              disabled={!isValid || isDisabled}
            >
              Войти
            </button>
          </form>
          <div className={"Auth__notation"}>
            <p className={"Auth__notation-txt"}>Ещё не зарегистрированы?</p>
            <Link to={"/signup"} className={"Auth__link"} onClick={() => setIsMessageApi('')}>
              Регистрация
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
