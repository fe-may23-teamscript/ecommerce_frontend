import React from 'react';

export const Layout: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <div>
      <div>put header here</div>
      {children}
      <div>put footer here</div>
    </div>
  );
};
