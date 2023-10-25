import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import Navigation from '../Navigation/Navigation';
import './Header.scss';
import { ReactComponent as Like } from 'assets/icons/favourite.svg';
import { ReactComponent as Cart } from 'assets/icons/cart.svg';
import { ReactComponent as Close } from 'assets/icons/close.svg';
import { ReactComponent as Burger } from 'assets/icons/menuBurger.svg';
import { ReactComponent as User } from 'assets/icons/user.svg';
import { ReactComponent as LogOut } from 'assets/icons/log-out.svg';
import { useAppSelector } from '../../app/providers/store/lib/redux-hooks';
import { getTotalCount } from '../../app/providers/store/slices/cart.slice';
import { getFavourites } from 'app/providers/store/slices/favourites.slice';
import {
  getCartPath,
  getFavouritesPath,
  getProfilePath,
} from 'shared/utils/getRoutes';
import cn from 'classnames';
import { ThemeSwitcher } from 'components/ThemeSwitcher';
import SearchBar from 'components/SearchBar/SearchBar';
import { useTranslation } from 'react-i18next';
import { BurgerMenu } from 'components/BurgerMenu';
import defaultProfile from 'assets/images/profile.jpg';

type Props = {
  theme: string;
  toggleTheme: () => void;
};

const Header: React.FC<Props> = ({ theme, toggleTheme }) => {
  const [showBurger, setShowBurger] = useState(false);
  const [lang, setLang] = useState('en');
  const totalCount = useAppSelector(getTotalCount);
  const favouritesItems = useAppSelector(getFavourites);
  const { loginWithRedirect, isAuthenticated, logout, user } = useAuth0();
  const { i18n } = useTranslation();

  useEffect(() => {
    const savedLang = localStorage.getItem('selectedLanguage');
    if (savedLang) {
      i18n.changeLanguage(savedLang);
      setLang(savedLang);
    }
  }, [i18n]);

  const changeLanguage = (newLang: string) => {
    i18n.changeLanguage(newLang);
    setLang(newLang);
    localStorage.setItem('selectedLanguage', newLang);
  };

  const handleLogout = () => {
    return logout({ logoutParams: { returnTo: window.location.origin } });
  };

  return (
    <header className="header" id="header-top">
      <Navigation />
      <SearchBar />
      <div className="menu-items">
        <ThemeSwitcher theme={theme} toggleTheme={toggleTheme} />
        <div className="menu-items__lang">
          <button
            className={cn('menu-items__button-lang', {
              'menu-items__button-lang--active': lang === 'en',
            })}
            onClick={() => changeLanguage('en')}
          >
            EN
          </button>
          |
          <button
            className={cn('menu-items__button-lang', {
              'menu-items__button-lang--active': lang === 'ua',
            })}
            onClick={() => changeLanguage('ua')}
          >
            UA
          </button>
        </div>

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
        <button className="menu-items__button-right">
          {isAuthenticated ? (
            <>
              <NavLink
                to={getProfilePath()}
                className={() => cn('menu-items__profile')}
              >
                <img src={user?.picture ? user?.picture : defaultProfile} />
              </NavLink>
              <LogOut
                className="menu-items__button-right--icon"
                onClick={handleLogout}
              />
            </>
          ) : (
            <User
              className="menu-items__button-right--icon"
              onClick={() => loginWithRedirect()}
            />
          )}
        </button>

        <div className="menu-items__button-right">
          {showBurger ? (
            <Close
              className="menu-items__button-right--icon"
              onClick={() => setShowBurger(false)}
            />
          ) : (
            <Burger
              className="menu-items__button-right--icon"
              onClick={() => setShowBurger(true)}
            />
          )}
        </div>

        {showBurger && <BurgerMenu closeBurger={() => setShowBurger(false)} />}
      </div>
    </header>
  );
};

export default Header;
