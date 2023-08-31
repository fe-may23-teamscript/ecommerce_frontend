import { lazy } from 'react';

export const CartPageAsync = lazy(() =>
  import('./Cart.page').then((data) => data),
);
