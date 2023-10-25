import React from 'react';
import { Link } from 'react-router-dom';
import { getHomePath } from 'shared/utils/getRoutes';
import './NotFound.page.scss';

const NotFoundPage: React.FC = () => {
  return (
    <div className="not-found">
      <h2 className="not-found__title">404</h2>
      <span className="not-found__line"></span>
      <div className="not-found__content">
        <p className="not-found__oops">Oops!</p>
        <p className="not-found__text">
          That page you&apos;re looking can&apos;t be found.
        </p>
        <Link to={getHomePath()} className="not-found__btn">
          Go to Homepage
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
