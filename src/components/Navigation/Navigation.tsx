import { Link } from 'react-router-dom';
import './Navigation.scss';
import logo from 'shared/assets/Logo.svg';

const navBar = ['home', 'phones', 'tablets', 'accessories'];

const Navigation = () => {
  return (
    <nav className="navigation">
      <Link to="/" className="navigation__logo">
        <img
          src={logo}
          alt="Nice Gadgets Logo"
          style={{ width: '80px', height: '28px' }}
        />
      </Link>
      {navBar.map((navItemName) => (
        <Link
          to={`/${navItemName}`}
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
