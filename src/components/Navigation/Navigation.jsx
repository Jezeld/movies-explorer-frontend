import { Link } from 'react-router-dom';
import './Navigation.css';

const Navigation = () => (
  <nav className="Navigation">
    <Link className="Navigation__link" to="/signup">Регистрация</Link>
    <Link className="Navigation__link Navigation__link_btn" to="/signin">Войти</Link>
  </nav>
);

export default Navigation;