import { Link, useLocation } from 'react-router-dom';
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
import { useAppSelector } from '../../app/providers/store/lib/redux-hooks';
import { getTotalCount } from '../../app/providers/store/slices/cart.slice';
import { getFavourites } from 'app/providers/store/slices/favourites.slice';

const navBar = ['phones', 'tablets', 'accessories'];

export const BurgerMenu: React.FC = () => {
  const { pathname } = useLocation();
  const totalCount = useAppSelector(getTotalCount);
  const favouritesItems = useAppSelector(getFavourites);

  return (
    <aside className="menu">
      <div className="nav menu__nav">
        <ul className="nav__list">
          <li className="nav__item">
            <Link
              to={`/${getHomePath()}`}
              key={'home'}
              className={cn('nav__link', {
                'nav__link--active': pathname === '/menu',
              })}
            >
              {'home'}
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
              >
                {navItemName}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="menu__bottom">
        <Link
          to={`/${getFavouritesPath()}`}
          className={cn('menu__link menu__link--favourite', {
            'menu__link--active': pathname.includes('favourites'),
          })}
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
          to={`/${getCartPath()}`}
          className={cn('menu__link', {
            'menu__link--active': pathname.includes('cart'),
          })}
        >
          <div className="menu__link-wrapper">
            <Cart className="menu__link-icon" />
            {totalCount > 0 && (
              <span className="menu__total-count">{totalCount}</span>
            )}
          </div>
        </Link>
      </div>
    </aside>
  );
};
