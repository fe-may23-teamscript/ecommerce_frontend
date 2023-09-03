import { NavLink } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';
import './Header.scss';
import menuBurger from 'shared/assets/MenuBurger-Icon.svg';
import favourites from 'shared/assets/Favourites-Icon.svg';
import shoppingBag from 'shared/assets/ShoppingBag-Icon.svg';
import {
  getBurgerMenuPath,
  getCartPath,
  getFavouritesPath,
} from 'shared/utils/getRoutes';
import cn from 'classnames';

const Header = () => {
  return (
    <header className="header" id="header-top">
      <Navigation />
      <div className="menu-items">
        <NavLink
          to={getBurgerMenuPath()}
          className={() => cn('menu-items__button-right')}
        >
          <img src={menuBurger} alt="header aside menu button" />
        </NavLink>
        <NavLink
          to={getFavouritesPath()}
          className={({ isActive }) =>
            cn('menu-items__button-right', {
              'menu-items__button-right--active': isActive,
            })
          }
        >
          <img src={favourites} alt="header favourites products button" />
        </NavLink>
        <NavLink
          to={getCartPath()}
          className={({ isActive }) =>
            cn('menu-items__button-right', {
              'menu-items__button-right--active': isActive,
            })
          }
        >
          <img src={shoppingBag} alt="header shopping bag button" />
        </NavLink>
      </div>
    </header>
  );
};

export default Header;
