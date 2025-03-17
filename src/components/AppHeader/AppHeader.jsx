import { NavLink } from 'react-router';
import clsx from 'clsx';
import css from './AppHeader.module.css';

const getLinkStyles = ({ isActive }) => {
  return clsx(css.link, isActive && css.active);
};

export default function AppHeader() {
  return (
    <header className={css.header}>
      <nav className={css.nav}>
        <ul className={css.list}>
          <li>
            <NavLink to="/" className={getLinkStyles}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard" className={getLinkStyles}>
              Dashboard
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
