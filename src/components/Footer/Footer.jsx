import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import { useLocation } from "react-router-dom";

function Footer() {
  const location = useLocation();

  const footer =
    location.pathname === "/" ||
    location.pathname === "/movies" ||
    location.pathname === "/saved-movies";

  return (
    <>
      {footer && (
        <footer className="footer" aria-label="bottom">
          <h4 className="footer__title">
            Учебный проект Яндекс.Практикум х BeatFilm.
          </h4>
          <div className="footer__bottom">
            <p className="footer__item">© {new Date().getFullYear()}</p>
            <div className="footer__links">
              <Link
                className="footer__item footer__item-link"
                type="link"
                target="blank"
                to="https://practicum.yandex.ru/"
              >
                Яндекс.Практикум
              </Link>
              <Link
                className="footer__item footer__item-link"
                type="link"
                target="blank"
                to="https://github.com/Jezeld"
              >
                Github
              </Link>
            </div>
          </div>
        </footer>
      )}
    </>
  );
}

export default Footer;
