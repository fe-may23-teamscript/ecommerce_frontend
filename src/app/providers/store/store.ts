import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { phonesAPI } from 'api/phones.api';
import cartSlice from './slices/cart.slice';
import favouritesSlice from './slices/favourites.slice';

const rootReducer = combineReducers({
  cart: cartSlice,
  favourites: favouritesSlice,
  [phonesAPI.reducerPath]: phonesAPI.reducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(phonesAPI.middleware),
  });
};

export const store = setupStore();

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
