import { Link } from 'react-router-dom';
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

const Header = () => {
  return (
    <header className="header" id="header-top">
      <Navigation />
      <div className="menu-items">
        <Link to={getBurgerMenuPath()} className="menu-items__button-right">
          <img src={menuBurger} alt="header aside menu button" />
        </Link>
        <Link to={getFavouritesPath()} className="menu-items__button-right">
          <img src={favourites} alt="header favourites products button" />
        </Link>
        <Link to={getCartPath()} className="menu-items__button-right">
          <img src={shoppingBag} alt="header shopping bag button" />
        </Link>
      </div>
    </header>
  );
};

export default Header;
