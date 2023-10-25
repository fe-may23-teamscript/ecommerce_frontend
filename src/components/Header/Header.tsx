import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';
import './Header.scss';
import { ReactComponent as Like } from 'assets/icons/favourite.svg';
import { ReactComponent as Cart } from 'assets/icons/cart.svg';
import { ReactComponent as Close } from 'assets/icons/close.svg';
import { ReactComponent as BurgerMenu } from 'assets/icons/menuBurger.svg';
import { ReactComponent as User } from 'assets/icons/user.svg';
import { ReactComponent as LogOut } from 'assets/icons/log-out.svg';
import {
  useAppDispatch,
  useAppSelector,
} from '../../app/providers/store/lib/redux-hooks';
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
import { Login } from 'components/Login';
import { Modal } from '../../shared/hooks/useModal';
import {
  selectUser,
  toggleFirst,
  toggleModal,
} from '../../app/providers/store/slices/userSlice';

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
  const { isAuthenticated } = useAppSelector(selectUser);
  const dispatch = useAppDispatch();

  return (
    <>
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

          {isAuthenticated ? (
            <NavLink
              to={getProfilePath()}
              className={({ isActive }) =>
                cn('menu-items__button-right', {
                  'menu-items__button-right--active': isActive,
                })
              }
            >
              <LogOut className="menu-items__button-right--icon" />
            </NavLink>
          ) : (
            <button
              className="menu-items__button-right"
              onClick={() => {
                dispatch(toggleModal(true));
                dispatch(toggleFirst(true));
              }}
            >
              <User className="menu-items__button-right--icon" />
            </button>
          )}

          <NavLink
            to={getPath}
            className={() => cn('menu-items__button-right')}
          >
            {isMenuOpened ? (
              <Close className="menu-items__button-right--icon" />
            ) : (
              <BurgerMenu className="menu-items__button-right--icon" />
            )}
          </NavLink>
        </div>
      </header>

      <Modal>
        <Login />
      </Modal>
    </>
  );
};

export default Header;
