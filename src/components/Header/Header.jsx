
import { Link, useLocation } from "react-router-dom";
import "./Header.css";
import Navigation from "../Navigation/Navigation.jsx";
import NavigationMovie from "../NavigationMovie/NavigationMovie.jsx";

const Header = ({isLoggedIn }) => {
  const location = useLocation();

  const header =
    location.pathname === "/" ||
    location.pathname === "/movies" ||
    location.pathname === "/saved-movies" ||
    location.pathname === "/profile";

  return (
    <>
      {header && (
        <header className={location.pathname === '/' ? 'header' : 'header header__black'}>
          <Link to="/#">
            <div className="header__logo"></div>
          </Link>
          {isLoggedIn ? <NavigationMovie /> : <Navigation />}
           {/* {location.pathname === '/' ? <Navigation /> :  <NavigationMovie /> } */}
        </header>
      )}
    </>
  );
};

export default Header;
