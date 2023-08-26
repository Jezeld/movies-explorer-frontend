import React from "react";
import "./AboutProject.css";

function AboutProject() {
  return (
    <section className="about-project" id="about-project">
        <div className="about-project__header">
      <h2 className="about-project__title">О проекте</h2>
      </div>
      <ul className="about-project__table">
        <li className="table__item">
          <h2 className="table__item_title">
            Дипломный проект включал 5 этапов
          </h2>
          <p className="table__item_text">
            Составление плана, работу над бэкендом, вёрстку, добавление
            функциональности и финальные доработки.
          </p>
        </li>
        <li className="table__item">
          <h2 className="table__item_title">
            На выполнение диплома ушло 5 недель
          </h2>
          <p className="table__item_text">
            У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
            соблюдать, чтобы успешно защититься.
          </p>
        </li>
      </ul>
      <div className="about-project__line">
      <p className="about-project__week-one about-project_font">1 неделя</p>
      <p className="about-project__week-four about-project_font">4 недели</p>
      <p className="about-project__line-caption">Back-end</p>
      <p className="about-project__line-caption">Front-end</p>
      </div>
    </section>
  );
}

export default AboutProject;
