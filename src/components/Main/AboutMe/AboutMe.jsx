import React from "react";
import "./AboutMe.css";
import { Link } from "react-router-dom";
import student from "../../../images/mypic.jpeg";

function AboutMe() {
  return (
    <section className="about-me" id={"about-me"}>
      <div className="about-me__header">
        <h2 className="about-me__title">Студент</h2>
      </div>
      <div className="about-me__container">
        <div className="about-me__text">
          <h3 className="about-me__text-title">Евгения</h3>
          <p className="about-me__paragraph">Фронтенд-разработчик, 38 лет</p>
          <p className="about-me__paragraph-caption">
            Я родилась в г.Омске, закончила ОмГТУ. Замужем, имею двоих детей.
            Около 10 лет работала в ООО "Деан СБ" менеджером по продажам систем
            безопасности. Находясь в декретном отпуске, решила изучить новую и
            востребованную профессию: веб-разработка. Увлекаюсь акройогой,
            плаванием.
          </p>
          <Link
            className="about-me__link-github"
            // type="link"
            target="blank"
            to="https://github.com/Jezeld"
          >
            Github
          </Link>
        </div>
        <img
          className="about-me__student-photo"
          alt="О студенте"
          src={student}
        />
      </div>
    </section>
  );
}

export default AboutMe;
