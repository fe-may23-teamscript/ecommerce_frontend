import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';
import './Header.scss';
import menuBurger from 'shared/assets/MenuBurger-Icon.svg';
import favourites from 'shared/assets/Favourites-Icon.svg';
import shoppingBag from 'shared/assets/ShoppingBag-Icon.svg';
import closeIcon from 'shared/assets/Close.svg';
import userIcon from 'shared/assets/User-Icon.svg';
import { useAppSelector } from '../../app/providers/store/lib/redux-hooks';
import { getTotalCount } from '../../app/providers/store/slices/cart.slice';
import { getFavourites } from 'app/providers/store/slices/favourites.slice';
import {
  getBurgerMenuPath,
  getCartPath,
  getFavouritesPath,
  getProfilePath,
} from 'shared/utils/getRoutes';
import cn from 'classnames';
import { ThemeSwitcher } from 'components/ThemeSwitcher';

type Props = {
  theme: string;
  toggleTheme: () => void;
};

const Header: React.FC<Props> = ({ theme, toggleTheme }) => {
  const { pathname } = useLocation();
  const isMenuOpened = pathname.includes('menu');
  const icon = isMenuOpened ? closeIcon : menuBurger;
  const getPath = isMenuOpened
    ? pathname.slice(0, pathname.length - 5)
    : getBurgerMenuPath(pathname);
  const totalCount = useAppSelector(getTotalCount);
  const favouritesItems = useAppSelector(getFavourites);

  return (
    <header className="header" id="header-top">
      <Navigation />
      <div className="menu-items">
        <ThemeSwitcher theme={theme} toggleTheme={toggleTheme} />

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
          {favouritesItems.length > 0 && (
            <span className="menu-items__total-count">
              {favouritesItems.length}
            </span>
          )}
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
          {totalCount > 0 && (
            <span className="menu-items__total-count">{totalCount}</span>
          )}
        </NavLink>
        <NavLink
          to={getProfilePath()}
          className={({ isActive }) =>
            cn('menu-items__button-right', {
              'menu-items__button-right--active': isActive,
            })
          }
        >
          <img
            src={userIcon}
            alt="menu-items__button-right--icon"
            className="menu-items__button-right--icon"
          />
        </NavLink>
        <NavLink to={getPath} className={() => cn('menu-items__button-right')}>
          <img
            src={icon}
            alt="menu-items__button-right--icon"
            className="menu-items__button-right--icon"
          />
        </NavLink>
      </div>
    </header>
  );
};

export default Header;
