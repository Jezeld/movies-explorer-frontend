// import React from "react";
// import "./Header.css";
// import {Route, Routes, Link} from 'react-router-dom';

// function Header() {
//   return (
//     <header className="header">
//       <div className="header__wrapper">
//         <div className="header__logo"></div>
//       </div>
//     </header>
//   );
// }

// export default Header;
import { Link, useLocation } from "react-router-dom";

import "./Header.css";

const Header = ({ children }) => {
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
          {children}
        </header>
      )}
    </>
  );
};

export default Header;
