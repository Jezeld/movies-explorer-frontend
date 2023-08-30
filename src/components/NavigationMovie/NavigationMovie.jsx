import { Link } from 'react-router-dom';
import { useState } from "react";
import BurgerMenu from '../BurgerMenu/BurgerMenu';
import './NavigationMovie.css';
import openMenu from '../../images/openmenu.svg';
import close from '../../images/close.svg';

function NavigationMovie() {

  const [isOpenMenu, setIsOpenMenu] = useState(false);
  function toggleBurgerMenu() {
      setIsOpenMenu(true);
    }
    function closeMenu() {
      setIsOpenMenu(false)
    }
return (
  <>
  {!isOpenMenu ? (
    <button className="header__menu-open" onClick={toggleBurgerMenu} >
      <img src={openMenu} alt='Меню'/>
      </button>
  ): (
    <button className="header__menu-close"  onClick={closeMenu}>
      <img src={close} alt='кнопка "Закрыть"'/>
    </button>
  )}
  <BurgerMenu isOpenMenu={isOpenMenu} setIsOpenMenu={setIsOpenMenu}/>
  <div className="NavigationMovie">
       <nav className="NavigationMovie__nav">
       <Link className="NavigationMovie__link NavigationMovie__active" to="/movies">Фильмы</Link>
       <Link className="NavigationMovie__link" to="/saved-movies">Сохранённые фильмы</Link>
      </nav>
      <Link className="NavigationMovie__link NavigationMovie__profile" to="/profile"/>
    </div>
    </>
)
}

export default NavigationMovie;