import { lazy } from 'react';

export const ProductDetailsPageAsync = lazy(
  async () => await import('./ProductDetails.page'),
);
