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
      <ul className="techs__table">
        <li className="techs__table_item">HTML</li>
        <li className="techs__table_item">CSS</li>
        <li className="techs__table_item">JS</li>
        <li className="techs__table_item">React</li>
        <li className="techs__table_item">Git</li>
        <li className="techs__table_item">Express.js</li>
        <li className="techs__table_item">mongoDB</li>
      </ul>
    </section>
  );
}

export default Techs;
