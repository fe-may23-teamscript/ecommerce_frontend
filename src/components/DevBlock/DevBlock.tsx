import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as HomeIcon } from 'shared/assets/Home-Icon.svg';
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
        <HomeIcon/>
        Go Home
      </Link>

    </div>
  );
};

export default DevBlock;
