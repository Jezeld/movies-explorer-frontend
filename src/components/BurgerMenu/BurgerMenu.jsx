import { Link } from "react-router-dom";
import "./BurgerMenu.css";

function BurgerMenu({ isOpenMenu }) {
  return (
      <div
      className={`BurgerMenu ${
          !isOpenMenu ? "BurgerMenu__none" : ""
      } `}
    >
        <nav className="BurgerMenu__nav">
          <ul className="BurgerMenu__list">
            <li className="BurgerMenu__item">
              <Link className="BurgerMenu__link" to="/">
                Главная
              </Link>
            </li>
            <li className="BurgerMenu__item">
              <Link
                className="BurgerMenu__link BurgerMenu__active"
                to="/movies"
              >
                Фильмы
              </Link>
            </li>
            <li className="BurgerMenu__item">
              <Link className="BurgerMenu__link" to="/saved-movies">
                Сохранённые фильмы
              </Link>
            </li>
          </ul>
          <Link className="BurgerMenu__profile" to="/profile"></Link>
        </nav>
      </div>
  );
}

export default BurgerMenu;
