import { lazy } from 'react';

export const FavouritesPageAsync = lazy(
  async () => await import('./Favourites.page'),
);
