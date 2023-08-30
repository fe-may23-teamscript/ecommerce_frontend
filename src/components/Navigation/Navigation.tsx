import { Link } from 'react-router-dom';
import './Navigation.scss';
import logo from 'shared/assets/Logo.svg';
import { getCatalog, getHomePath } from 'shared/utils/getRoutes';

const navBar = ['phones', 'tablets', 'accessories'];

const Navigation = () => {
  return (
    <nav className="navigation">
      <Link to={getHomePath()} className="navigation__logo">
        <img
          src={logo}
          alt="Nice Gadgets Logo"
          style={{ width: '80px', height: '28px' }}
        />
      </Link>
      <Link to={getHomePath()} key={'home'} className="navigation__item">
        {'home'}
      </Link>
      {navBar.map((navItemName) => (
        <Link
          to={getCatalog(navItemName)}
          key={navItemName}
          className="navigation__item"
        >
          {navItemName}
        </Link>
      ))}
    </nav>
  );
};

export default Navigation;
