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
  getFavouritesPath,
  getHomePath,
  getProfilePath,
} from 'shared/utils/getRoutes';
import { MenuPage } from 'pages/MenuPage';
import { ProductDetailsPage } from 'pages/ProductDetailsPage';
import { ProfilePage } from 'pages/ProfilePage';
import DevelopPage from '../../../pages/DevelopPage/DevelopPage';

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
    element: <DevelopPage />,
  },
  {
    path: getCatalog('accessories'),
    element: <DevelopPage />,
  },
  {
    path: 'catalog/:category/:slug',
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
    path: getBurgerMenuPath('/'),
    element: <MenuPage />,
  },
  {
    path: getBurgerMenuPath('catalog/:category'),
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
    path: getBurgerMenuPath('/catalog/:category/:slug'),
    element: <MenuPage />,
  },
  {
    path: getProfilePath(),
    element: <ProfilePage />,
  },
  {
    path: '*',
    element: <NotFoundPage />,
  },
];
