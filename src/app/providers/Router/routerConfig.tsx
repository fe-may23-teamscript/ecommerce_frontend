import { RouteObject } from 'react-router-dom';
import { HomePage } from 'pages/HomePage';
import { CatalogPage } from 'pages/CatalogPage';
import { FavouritesPage } from 'pages/FavouritesPage';
import { CartPage } from 'pages/CartPage';
import { BurgerMenu } from 'components/BurgerMenu';
import { NotFoundPage } from 'pages/NotFoundPage';
import {
  getBurgerMenuPath,
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
    path: getDevicePath('phones', 'deviceId'),
    element: <CatalogPage />,
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
    path: getBurgerMenuPath('/'),
    element: <BurgerMenu />,
  },
  {
    path: getBurgerMenuPath('catalog/phones'),
    element: <BurgerMenu />,
  },
  {
    path: getBurgerMenuPath('catalog/tablets'),
    element: <BurgerMenu />,
  },
  {
    path: getBurgerMenuPath('catalog/accessories'),
    element: <BurgerMenu />,
  },
  {
    path: getBurgerMenuPath('favourites'),
    element: <BurgerMenu />,
  },
  {
    path: getBurgerMenuPath('cart'),
    element: <BurgerMenu />,
  },
  {
    path: '*',
    element: <NotFoundPage />,
  },
];
