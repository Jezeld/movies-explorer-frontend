import React, { useEffect } from "react";
import "./Auth.css";
import { Link } from "react-router-dom";
import useValidation from "../../hooks/useValidation";
import logo from "../../images/logo.svg";

const Register = ({ onRegister, isMessageApi, setIsMessageApi }) => {
  const { values, handleChange, errors, isValid, resetForm, isDisabled } =
    useValidation({ name: "", email: "", password: "" });

  useEffect(() => {
    resetForm();
  }, [resetForm]);

  function handleSubmit(e) {
    e.preventDefault();
    onRegister(values.name, values.email, values.password);
  }


  const handleChangeResetApi = (e) => {
    handleChange(e);
    setIsMessageApi("");
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
            onSubmit={handleSubmit}
            id={"register"}
            name={`signup`}
            noValidate
          >
            <label className={"Auth__label"}>
              <span className={"Auth__txt"}>Имя</span>
              <input
                onChange={handleChangeResetApi}
                value={values.name || ""}
                className={"Auth__input"}
                type={"text"}
                name={"name"}
                id="name"
                minLength={2}
                maxLength={30}
                required={true}
                placeholder="Имя"
              />
              <span className={"Auth__error"}>{errors.name}</span>
            </label>

            <label className={"Auth__label"}>
              <span className={"Auth__txt"}>E-mail</span>
              <input
                onChange={handleChangeResetApi}
                value={values.email || ""}
                className={"Auth__input"}
                type={"email"}
                name={"email"}
                id="email"
                required={true}
                placeholder="Email"
                // pattern="/.+@.+\..+/i"
                pattern="^[a-zA-Z0-9_.+\-]+@[a-zA-Z0-9\-]+\.[a-zA-Z0-9\-.]+$"
              />
              <span className={"Auth__error"}>{errors.email}</span>
            </label>
            <label className={"Auth__label"}>
              <span className={"Auth__txt"}>Пароль</span>
              <input
                onChange={handleChangeResetApi}
                value={values.password || ""}
                className={
                  errors.password
                    ? "Auth__input Auth__input_error"
                    : "Auth__input"
                }
                type={"password"}
                name={"password"}
                minLength={6}
                required={true}
                id="password"
                placeholder="Пароль"
              />
              <span className={"Auth__error"}>{errors.password}</span>
            </label>
            <span className="Auth__error-server">{isMessageApi}</span>
            <button
              type={"submit"}
              className={`Auth__btn ${
                !isValid || isDisabled ? "Auth__btn_disabled" : ""
              }`}
              disabled={!isValid || isDisabled}
            >
              Зарегистрироваться
            </button>
          </form>
          <div className={"Auth__notation"}>
            <p className={"Auth__notation-txt"}>Уже зарегистрированы?</p>
            <Link
              // onClick={() => setIsMessageApi("")}
              to={"/signin"}
              className={"Auth__link"}
            >
              Войти
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Register;
