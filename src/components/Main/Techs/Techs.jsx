import React from "react";
import "./Techs.css";

function Techs() {
  return (
    <section id="techs" className="techs">
      <div className="techs__header">
        <h2 className="techs__title">Технологии</h2>
      </div>
      <h3 className="techs__subtitle"> 7 технологий</h3>
      <p className="techs__paragraph">
        На курсе веб-разработки мы освоили технологии, которые применили в
        дипломном проекте.
      </p>
      <ul className="techs-table">
        <li className="techs-table__item">HTML</li>
        <li className="techs-table__item">CSS</li>
        <li className="techs-table__item">JS</li>
        <li className="techs-table__item">React</li>
        <li className="techs-table__item">Git</li>
        <li className="techs-table__item">Express.js</li>
        <li className="techs-table__item">mongoDB</li>
      </ul>
    </section>
  );
}

export default Techs;
