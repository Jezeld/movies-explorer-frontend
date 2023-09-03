import React, { useEffect } from "react";
import "./Auth.css";
import { Link } from "react-router-dom";
import useValidation from "../../hooks/useValidation";
import logo from "../../images/logo.svg";

const Login = () => {
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
          <h1 className={"Auth__title"}>Рады видеть!</h1>
          <form
            className={"Auth__form"}
            onSubmit={(e) => {
              submitHandler(e);
            }}
            id={"login"}
          >
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
                minLength={5}
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
                className={"Auth__input"}
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
              className={"Auth__btn Auth__btn_margin"}
              disabled={!isValid}
            >
              Войти
            </button>
          </form>
          <div className={"Auth__notation"}>
            <p className={"Auth__notation-txt"}>Ещё не зарегистрированы?</p>
            <Link to={"/signup"} className={"Auth__link"}>
              Регистрация
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
