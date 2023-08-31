import { lazy } from 'react';

export const DevicePageAsync = lazy(async () => await import('./Device.page'));
