import { Suspense } from 'react';
import { useRoutes } from 'react-router-dom';
import { routerConfig } from './routerConfig';
import { Loader } from 'components/Loader';

const Router = () => {
  const routing = useRoutes(routerConfig);

  return <Suspense fallback={<Loader/>}>
    {routing}
  </Suspense>;
};

export default Router;
