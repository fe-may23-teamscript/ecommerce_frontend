import { Link } from 'react-router-dom';
import './Footer.scss';
import logo from 'shared/assets/Logo.svg';
import slider from 'shared/assets/SliderButton-Icon.svg';

const footerNavItems = ['github', 'contacts', 'rights'];

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <Link to="/" className="footer__logo">
          <img src={logo} alt="Nice Gadgets Logo" />
        </Link>
        <div className="footer__navigation">
          {footerNavItems.map((navItemName) => (
            <Link
              to={`/${navItemName}`}
              key={navItemName}
              className="footer__navigation-item"
            >
              {navItemName}
            </Link>
          ))}
        </div>
        <div className="footer__back-to-top-container">
          <a className="footer__back-to-top-link" href="#header-top">
            Back to top
          </a>
          <button className="footer__back-to-top-button">
            <a href="#header-top">
              <img src={slider} alt="back to top button corner top" />
            </a>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
