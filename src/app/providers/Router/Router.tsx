import { routerConfig } from './routerConfig';
import { useRoutes } from 'react-router-dom';

const Router = () => {
  return useRoutes(routerConfig);
};

export default Router;
