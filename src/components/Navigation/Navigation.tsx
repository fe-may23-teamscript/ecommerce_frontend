import { NavLink, Link } from 'react-router-dom';
import cn from 'classnames';
import './Navigation.scss';
import { getCatalog, getHomePath } from 'shared/utils/getRoutes';
import { useTranslation } from 'react-i18next';

const Navigation = () => {
  const { t } = useTranslation();
  const navBar = ['phones', 'tablets', 'accessories'];

  return (
    <nav className="navigation">
      <Link to={getHomePath()} className={cn('navigation__logo')}>
        <div className="navigation__logo-link" />
      </Link>
      <NavLink
        to={getHomePath()}
        className={({ isActive }) =>
          cn('navigation__item', {
            'navigation__item--active': isActive,
          })
        }
      >
        {t('home')}
      </NavLink>
      {navBar.map((navItemName) => (
        <NavLink
          to={getCatalog(navItemName)}
          key={navItemName}
          className={({ isActive }) =>
            cn('navigation__item', {
              'navigation__item--active': isActive,
            })
          }
        >
          {t(navItemName)}
        </NavLink>
      ))}
    </nav>
  );
};

export default Navigation;
