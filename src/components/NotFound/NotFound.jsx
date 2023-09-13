import React from "react";
import "./NotFound.css";
import { useNavigate } from "react-router-dom";

function NotFound() {
  const navigate = useNavigate();
  const handleGoBack = () => {
    navigate(-1);
  };
  return (
    <section className="not-found">
      <h1 className="not-found__title">404</h1>
      <p className="not-found__subtitle">Страница не найдена</p>
      <button
        onClick={handleGoBack}
        className="not-found__button not-found__link"
      >
        Назад
      </button>
    </section>
  );
}

export default NotFound;
