import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';
import './Header.scss';
import { ReactComponent as Like } from 'assets/icons/favourite.svg';
import { ReactComponent as Cart } from 'assets/icons/cart.svg';
import { ReactComponent as Close } from 'assets/icons/close.svg';
import { ReactComponent as BurgerMenu } from 'assets/icons/menuBurger.svg';
import { useAppSelector } from '../../app/providers/store/lib/redux-hooks';
import { getTotalCount } from '../../app/providers/store/slices/cart.slice';
import { getFavourites } from 'app/providers/store/slices/favourites.slice';
import {
  getBurgerMenuPath,
  getCartPath,
  getFavouritesPath,
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
          to={getPath}
          className={() =>
            cn('menu-items__button-right menu-items__button-right--burger')
          }
        >
          {isMenuOpened ? (
            <Close className="menu-items__button-right--icon" />
          ) : (
            <BurgerMenu className="menu-items__button-right--icon" />
          )}
        </NavLink>

        <NavLink
          to={getFavouritesPath()}
          className={({ isActive }) =>
            cn('menu-items__button-right', {
              'menu-items__button-right--active': isActive,
            })
          }
        >
          <Like className="menu-items__button-right--icon" />
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
          <Cart className="menu-items__button-right--icon" />
          {totalCount > 0 && (
            <span className="menu-items__total-count">{totalCount}</span>
          )}
        </NavLink>
      </div>
    </header>
  );
};

export default Header;
