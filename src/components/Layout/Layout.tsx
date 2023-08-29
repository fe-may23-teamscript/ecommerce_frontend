import Footer from 'components/Footer/Footer';
import Header from 'components/Header/Header';
import React from 'react';

export const Layout: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
};
