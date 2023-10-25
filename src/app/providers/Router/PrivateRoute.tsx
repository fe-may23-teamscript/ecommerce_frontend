import { selectUser } from '../store/slices/userSlice';
import { useAppSelector } from '../store/lib/redux-hooks';
import { Navigate } from 'react-router-dom';
import React, { PropsWithChildren } from 'react';
import { getHomePath } from '../../../shared/utils/getRoutes';

export const PrivateRoute: React.FC<PropsWithChildren> = ({ children }) => {
  const { isAuthenticated } = useAppSelector(selectUser);

  if (!isAuthenticated) {
    return <Navigate to={getHomePath()} />;
  }

  return <>{children}</>;
};
