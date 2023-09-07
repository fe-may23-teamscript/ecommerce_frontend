import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as HomeIcon } from 'assets/icons/home.svg';
import './DevBlock.scss';
import techWorks from 'shared/assets/techWorks.png';

const DevBlock = () => {
  return (
    <div className="devBlock">
      <div className="title">
        This Page Is Being Developed Right Now
      </div>

      <div className="imageBlock">
        <img src={techWorks} alt="technical works"/>
      </div>

      <Link
        to={'/'}
        className="goHome"
      >
        <HomeIcon className="goHome__icon"/>
        Go Home
      </Link>

    </div>
  );
};

export default DevBlock;
