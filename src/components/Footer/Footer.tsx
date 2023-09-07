import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import cn from 'classnames';
import './Footer.scss';
import { ReactComponent as BackToTop } from 'assets/icons/arrow-up.svg';

const footerNavItems = ['github', 'contacts', 'rights'];

const Footer = () => {
  const [isVisibleBackToTop, setIsVisibleBackToTop] = useState(false);
  const { pathname } = useLocation();

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

  return (
    <footer
      className="footer"
      style={
        pathname.includes('menu') ? { display: 'none' } : { display: 'flex' }
      }
    >
      <div className="footer__container">
        <Link to="/" className="footer__logo"></Link>
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
            <BackToTop className="footer__back-to-top-icon" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
