import { RouteObject } from 'react-router-dom';
import { HomePage } from 'pages/HomePage';
import { CatalogPage } from 'pages/CatalogPage';
import { ProductDetailsPage } from 'pages/ProductDetailsPage';
import { FavouritesPage } from 'pages/FavouritesPage';
import { CartPage } from 'pages/CartPage';
import { NotFoundPage } from 'pages/NotFoundPage';
import {
  getCartPath,
  getCatalog,
  getDevicePath,
  getFavouritesPath,
  getHomePath,
} from 'shared/utils/getRoutes';

export const routerConfig: RouteObject[] = [
  {
    path: getHomePath(),
    element: <HomePage />,
    index: true,
  },
  {
    path: getCatalog('phones'),
    element: <CatalogPage />,
  },
  {
    path: getCatalog('tablets'),
    element: <CatalogPage />,
  },
  {
    path: getCatalog('accessories'),
    element: <CatalogPage />,
  },
  {
    path: getDevicePath('deviceId', 'phones'),
    element: <ProductDetailsPage />,
  },
  {
    path: getFavouritesPath(),
    element: <FavouritesPage />,
  },
  {
    path: getCartPath(),
    element: <CartPage />,
  },
  {
    path: '*',
    element: <NotFoundPage />,
  },
];
