import React from 'react';
import './NotFound.page.scss';
import notFound from 'assets/images/not-found.svg';

const NotFoundPage: React.FC = () => {
  return (
    <div className="not-found">
      <img src={notFound} className="not-found__img" />
      <h2 className="not-found__title">Page not Found</h2>
    </div>
  );
};

export default NotFoundPage;
