import Navigation from '../Navigation/Navigation';
import './Header.scss';
import menuBurger from 'shared/assets/MenuBurger-Icon.svg';
import favourites from 'shared/assets/Favourites-Icon.svg';
import shoppingBag from 'shared/assets/ShoppingBag-Icon.svg';

const Header = () => {
  return (
    <header className="header" id="header-top">
      <Navigation />
      <div className="menu-items">
        <button className="menu-items__button-right">
          <img src={menuBurger} alt="header aside menu button" />
        </button>
        <button className="menu-items__button-right">
          <img src={favourites} alt="header favourites products button" />
        </button>
        <button className="menu-items__button-right">
          <img src={shoppingBag} alt="header shopping bag button" />
        </button>
      </div>
    </header>
  );
};

export default Header;
