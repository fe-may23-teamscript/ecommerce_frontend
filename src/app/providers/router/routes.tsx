import { RouteObject } from 'react-router-dom';
import { HomePage } from '../../../pages/HomePage';
import { CatalogPage } from '../../../pages/CatalogPage';
import { DevicePage } from '../../../pages/DevicePage';
import { FavouritesPage } from '../../../pages/FavouritesPage';
import { CartPage } from '../../../pages/CartPage';
import {
  getCartPath,
  getCatalogPath,
  getDevicePath,
  getFavouritesPath,
  getHomePath
} from '../../../shared/utils/getRoutes';
import NotFoundPage from '../../../pages/NotFoundPage/NotFound.page';

export const routes: RouteObject[] = [
  {
    path: getHomePath(),
    element: <HomePage />,
  },
  {
    path: getCatalogPath(),
    element: <CatalogPage />
  },
  {
    path: getDevicePath('deviceId'),
    element: <DevicePage />
  },
  {
    path: getFavouritesPath(),
    element: <FavouritesPage />
  },
  {
    path: getCartPath(),
    element: <CartPage />
  },
  {
    path: "*",
    element: <NotFoundPage />
  }
]