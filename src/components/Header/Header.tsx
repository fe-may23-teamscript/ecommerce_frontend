import { Link, useLocation } from 'react-router-dom';
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
        <Link to={getPath} className="menu-items__button-right">
          <img
            src={icon}
            alt="header aside menu button"
            className="menu-items__button-right--icon"
          />
        </Link>
        <Link to={getFavouritesPath()} className="menu-items__button-right">
          <img
            src={favourites}
            alt="header favourites products button"
            className="menu-items__button-right--icon"
          />
        </Link>
        <Link to={getCartPath()} className="menu-items__button-right">
          <img
            src={shoppingBag}
            alt="header shopping bag button"
            className="menu-items__button-right--icon"
          />
        </Link>
      </div>
    </header>
  );
};

export default Header;
