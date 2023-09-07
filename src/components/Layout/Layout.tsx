import Footer from 'components/Footer/Footer';
import Header from 'components/Header/Header';
import React from 'react';

type Props = {
  theme: string;
  toggleTheme: () => void;
  children: JSX.Element;
};

export const Layout: React.FC<Props> = ({ toggleTheme, theme, children }) => {
  return (
    <>
      <Header theme={theme} toggleTheme={toggleTheme} />
      <div className="page">{children}</div>
      <Footer />
    </>
  );
};
