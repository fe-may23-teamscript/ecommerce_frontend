import { NavLink, useLocation } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';
import './Header.scss';
import menuBurger from 'shared/assets/MenuBurger-Icon.svg';
import favourites from 'shared/assets/Favourites-Icon.svg';
import shoppingBag from 'shared/assets/ShoppingBag-Icon.svg';
import closeIcon from 'shared/assets/Close.svg';
import {
  getBurgerMenuPath,
  getCartPath,
  getFavouritesPath,
} from 'shared/utils/getRoutes';
import cn from 'classnames';

const Header = () => {
  const { pathname } = useLocation();
  const isMenuOpened = pathname.includes('menu');
  const icon = isMenuOpened ? closeIcon : menuBurger;
  const getPath = isMenuOpened
    ? pathname.slice(0, pathname.length - 5)
    : getBurgerMenuPath(pathname);

  return (
    <header className="header" id="header-top">
      <Navigation />
      <div className="menu-items">
        <NavLink to={getPath} className={() => cn('menu-items__button-right')}>
          <img
            src={icon}
            alt="menu-items__button-right--icon"
            className="menu-items__button-right--icon"
          />
        </NavLink>
        <NavLink
          to={getFavouritesPath()}
          className={({ isActive }) =>
            cn('menu-items__button-right', {
              'menu-items__button-right--active': isActive,
            })
          }
        >
          <img
            src={favourites}
            alt="header favourites products button"
            className="menu-items__button-right--icon"
          />
        </NavLink>
        <NavLink
          to={getCartPath()}
          className={({ isActive }) =>
            cn('menu-items__button-right', {
              'menu-items__button-right--active': isActive,
            })
          }
        >
          <img
            src={shoppingBag}
            alt="header shopping bag button"
            className="menu-items__button-right--icon"
          />
        </NavLink>
      </div>
    </header>
  );
};

export default Header;
