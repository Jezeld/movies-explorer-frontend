import React from "react";
import "./Portfolio.css"
import { Link } from "react-router-dom";

function Portfolio() {
  return (
    <section className="portfolio">
        <h4 className="portfolio__title">Портфолио</h4>
        <div className="portfolio__container">
     <Link
      className="portfolio-link"
      // type="link"
      target="blank"
      to="https://github.com/Jezeld/how-to-learn"
    >
      <p className="portfolio-link__text">Статичный сайт</p>
      <div className="portfolio__image-arrow"></div>
    </Link>
    <Link
      className="portfolio-link"
      // type="link"
      target="blank"
      to="https://github.com/Jezeld/russian-travel"
    >
      <p className="portfolio-link__text">Адаптивный сайт</p>
      <div className="portfolio__image-arrow"></div>
    </Link>
    <Link
      className="portfolio-link"
      // type="link"
      target="blank"
      to="https://github.com/Jezeld/react-mesto-api-full-gha"
    >
      <p className="portfolio-link__text">Одностраничное приложение</p>
      <div className="portfolio__image-arrow"></div>
    </Link>
    </div>
  </section>
  )
}

export default Portfolio;