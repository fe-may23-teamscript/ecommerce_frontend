import React, { useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import cn from 'classnames';
import './BurgerMenu.scss';
import {
  getCartPath,
  getCatalog,
  getFavouritesPath,
  getHomePath,
} from 'shared/utils/getRoutes';
import { ReactComponent as Like } from 'assets/icons/favourite.svg';
import { ReactComponent as Cart } from 'assets/icons/cart.svg';
import { ReactComponent as User } from 'assets/icons/user.svg';
import { ReactComponent as LogOut } from 'assets/icons/log-out.svg';
import { useAppSelector } from '../../app/providers/store/lib/redux-hooks';
import { getTotalCount } from '../../app/providers/store/slices/cart.slice';
import { getFavourites } from 'app/providers/store/slices/favourites.slice';
import { getProfilePath } from 'shared/utils/getRoutes';
import { useTranslation } from 'react-i18next';
import { useAuth0 } from '@auth0/auth0-react';
import defaultProfile from 'assets/images/profile.jpg';

const navBar = ['phones', 'tablets', 'accessories'];

type Props = {
  closeBurger: () => void;
};

export const BurgerMenu: React.FC<Props> = ({ closeBurger }) => {
  const { t } = useTranslation();
  const { pathname } = useLocation();
  const totalCount = useAppSelector(getTotalCount);
  const favouritesItems = useAppSelector(getFavourites);
  const { loginWithRedirect, isAuthenticated, logout, user } = useAuth0();

  useEffect(() => {
    const body = document.body;
    body.classList.add('lock');

    return () => {
      body.classList.remove('lock');
    };
  }, []);

  const handleLogout = () => {
    return logout({ logoutParams: { returnTo: window.location.origin } });
  };

  return (
    <aside className="menu">
      <div className="nav menu__nav">
        <ul className="nav__list">
          <li className="nav__item">
            <Link
              to={getHomePath()}
              key={'home'}
              className={cn('nav__link', {
                'nav__link--active': pathname === '/',
              })}
              onClick={closeBurger}
            >
              {t('home')}
            </Link>
          </li>
          {navBar.map((navItemName, index) => (
            <li className="nav__item" key={index}>
              <Link
                to={`/${getCatalog(navItemName)}`}
                relative="path"
                key={navItemName}
                className={cn('nav__link', {
                  'nav__link--active': pathname.includes(navItemName),
                })}
                onClick={closeBurger}
              >
                {t(navItemName)}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="menu__bottom">
        <Link
          to={getFavouritesPath()}
          className={cn('menu__link menu__link--favourite', {
            'menu__link--active': pathname.includes('favourites'),
          })}
          onClick={closeBurger}
        >
          <div className="menu__link-wrapper">
            <Like className="menu__link-icon" />
            {favouritesItems.length > 0 && (
              <span className="menu__total-count menu__total-count--favourites">
                {favouritesItems.length}
              </span>
            )}
          </div>
        </Link>

        <Link
          to={getCartPath()}
          className={cn('menu__link', {
            'menu__link--active': pathname.includes('cart'),
          })}
          onClick={closeBurger}
        >
          <div className="menu__link-wrapper">
            <Cart className="menu__link-icon" />
            {totalCount > 0 && (
              <span className="menu__total-count">{totalCount}</span>
            )}
          </div>
        </Link>
        {isAuthenticated ? (
          <div className="menu__link">
            <NavLink to={getProfilePath()}>
              <img
                src={user?.picture ? user?.picture : defaultProfile}
                className="menu__profile-img"
              />
            </NavLink>
            <LogOut className="menu__link-icon" onClick={handleLogout} />
          </div>
        ) : (
          <div className="menu__link">
            <User
              className="menu__link-icon"
              onClick={() => loginWithRedirect()}
            />
          </div>
        )}
      </div>
    </aside>
  );
};
