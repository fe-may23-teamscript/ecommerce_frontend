import { RouteObject } from 'react-router-dom';
import { HomePage } from 'pages/HomePage';
import { CatalogPage } from 'pages/CatalogPage';
import { FavouritesPage } from 'pages/FavouritesPage';
import { CartPage } from 'pages/CartPage';
import { NotFoundPage } from 'pages/NotFoundPage';
import {
  getBurgerMenuPath,
  getCartPath,
  getCatalog,
  getDevicePath,
  getFavouritesPath,
  getHomePath,
} from 'shared/utils/getRoutes';
import { MenuPage } from 'pages/MenuPage';

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
    element: <MenuPage />,
  },
  {
    path: getBurgerMenuPath('catalog/phones'),
    element: <MenuPage />,
  },
  {
    path: getBurgerMenuPath('catalog/tablets'),
    element: <MenuPage />,
  },
  {
    path: getBurgerMenuPath('catalog/accessories'),
    element: <MenuPage />,
  },
  {
    path: getBurgerMenuPath('favourites'),
    element: <MenuPage />,
  },
  {
    path: getBurgerMenuPath('cart'),
    element: <MenuPage />,
  },
  {
    path: '*',
    element: <NotFoundPage />,
  },
];
