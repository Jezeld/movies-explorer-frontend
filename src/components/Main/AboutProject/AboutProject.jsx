import React from "react";
import "./AboutProject.css";

function AboutProject() {
  return (
    <section className="about-project" id="about-project">
        <div className="about-project__header">
      <h2 className="about-project__title">О проекте</h2>
      </div>
         <ul className="table">
        <li className="table__item">
          <h2 className="table__title">
            Дипломный проект включал 5 этапов
          </h2>
          <p className="table__text">
            Составление плана, работу над бэкендом, вёрстку, добавление
            функциональности и финальные доработки.
          </p>
        </li>
        <li className="table__item">
          <h2 className="table__title">
            На выполнение диплома ушло 5 недель
          </h2>
          <p className="table__text">
            У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
            соблюдать, чтобы успешно защититься.
          </p>
        </li>
      </ul>
          <div className="line">
      <p className="line__week-one line__font">1 неделя</p>
      <p className="line__week-four line__font">4 недели</p>
      <p className="line__caption">Back-end</p>
      <p className="line__caption">Front-end</p>
      </div>
    </section>
  );
}

export default AboutProject;
