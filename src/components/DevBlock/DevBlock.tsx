import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as HomeIcon } from 'assets/icons/home.svg';
import './DevBlock.scss';
import techWorks from 'shared/assets/techWorks.png';

const DevBlock = () => {
  return (
    <div className="dev-block">
      <div className="title">This Page Is Being Developed Right Now</div>

      <div className="image-block">
        <img src={techWorks} alt="technical works" />
      </div>

      <Link to={'/'} className="go-home">
        <HomeIcon className="go-home__icon" />
        Go Home
      </Link>
    </div>
  );
};

export default DevBlock;
