import { Link, useLocation } from 'react-router-dom';
import cn from 'classnames';
import './BurgerMenu.scss';
import {
  getCartPath,
  getCatalog,
  getFavouritesPath,
  getHomePath,
} from 'shared/utils/getRoutes';

const navBar = ['phones', 'tablets', 'accessories'];

export const BurgerMenu: React.FC = () => {
  const { pathname } = useLocation();

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
        />
        <Link
          to={`/${getCartPath()}`}
          className={cn('menu__link menu__link--shopping-bag', {
            'menu__link--active': pathname.includes('cart'),
          })}
        />
      </div>
    </aside>
  );
};
