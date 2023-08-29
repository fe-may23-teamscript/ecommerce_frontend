import { routes } from './routes';
import { useRoutes } from 'react-router-dom';

export const Router = () => {
  return useRoutes(routes);
};
