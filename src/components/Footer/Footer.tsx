import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import cn from 'classnames';
import './Footer.scss';
import logo from 'shared/assets/Logo.svg';
import slider from 'shared/assets/SliderButton-Icon.svg';

const footerNavItems = ['github', 'contacts', 'rights'];

const Footer = () => {
  const [isVisibleBackToTop, setIsVisibleBackToTop] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisibleBackToTop(true);
    } else {
      setIsVisibleBackToTop(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  const { pathname } = useLocation();

  if (pathname.includes('menu')) {
    return <></>;
  }

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
        <div
          className={cn('footer__back-to-top-container', {
            hidden: isVisibleBackToTop,
          })}
        >
          <button className="footer__back-to-top-link" onClick={scrollToTop}>
            Back to top
          </button>
          <button className="footer__back-to-top-button" onClick={scrollToTop}>
            <img src={slider} alt="back to top button corner top" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
