import React from "react";
import "./NavTab.css";

function NavTab() {
  return (
    <section className="navtab" aria-label="меню">
      <nav className="navtab__menu">
        <a className="navtab__link" href="#about-project">
          О проекте
        </a>
        <a className="navtab__link" href="#techs">
          Технологии
        </a>
        <a className="navtab__link" href="#about-me">
          Студент
        </a>
      </nav>
    </section>
  );
}

export default NavTab;
