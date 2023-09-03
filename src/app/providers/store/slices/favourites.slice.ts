import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { LOCAL_STORAGE_FAVOURITES } from 'shared/utils/constants';
import { IPhone } from 'models/IPhone';
import { RootState } from '../store';

export interface IFavouriteState {
  favouritesItems: IPhone[];
}

const favouriteStore = localStorage.getItem(LOCAL_STORAGE_FAVOURITES);

const initialState: IFavouriteState = {
  favouritesItems: JSON.parse(favouriteStore ? favouriteStore : '[]'),
};

const cartSlice = createSlice({
  name: 'Favourite',
  initialState,
  reducers: {
    addToFavourites: (state, action: PayloadAction<IPhone>) => {
      state.favouritesItems.push(action.payload);
      localStorage.setItem(LOCAL_STORAGE_FAVOURITES, JSON.stringify(state.favouritesItems));
    },
    deleteFromFavourites: (state, action: PayloadAction<number>) => {
      state.favouritesItems = state.favouritesItems.filter(
        ({ id }) => id !== action.payload,
      );

      localStorage.setItem(LOCAL_STORAGE_FAVOURITES, JSON.stringify(state.favouritesItems));
    },
  },
});

export const { addToFavourites, deleteFromFavourites } = cartSlice.actions;

export default cartSlice.reducer;

export const getFavourites = (state: RootState) =>
  state.favourites.favouritesItems;
