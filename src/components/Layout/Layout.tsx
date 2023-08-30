import React from 'react';
import { Button } from 'shared/ui/Button';

export const Layout: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <div>
      <div>put header here</div>
      {children}
      <Button round={true} size="medium" square={true}>
        Press me!
      </Button>
      <div>put footer here</div>
    </div>
  );
};
