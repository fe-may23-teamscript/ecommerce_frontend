import { lazy } from 'react';

export const ProfilePageAsync = lazy(
  async () => await import('./Profile.page'),
);
