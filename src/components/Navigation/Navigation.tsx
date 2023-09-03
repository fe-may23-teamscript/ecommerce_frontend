import { NavLink, Link } from 'react-router-dom';
import cn from 'classnames';
import './Navigation.scss';
import logo from 'shared/assets/Logo.svg';
import { getCatalog, getHomePath } from 'shared/utils/getRoutes';

const navBar = ['phones', 'tablets', 'accessories'];

const Navigation = () => {
  return (
    <nav className="navigation">
      <Link to={getHomePath()} className={cn('navigation__logo')}>
        <img
          src={logo}
          alt="Nice Gadgets Logo"
          style={{ width: '80px', height: '28px' }}
        />
      </Link>
      <NavLink
        to={getHomePath()}
        className={({ isActive }) =>
          cn('navigation__item', {
            'navigation__item--active': isActive,
          })
        }
      >
        {'home'}
      </NavLink>
      {navBar.map((navItemName) => (
        <NavLink
          to={getCatalog(navItemName)}
          key={navItemName}
          className={({ isActive }) =>
            cn('navigation__item', {
              'navigation__item--active': isActive,
            })
          }
        >
          {navItemName}
        </NavLink>
      ))}
    </nav>
  );
};

export default Navigation;
