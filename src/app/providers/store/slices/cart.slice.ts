import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { LOCAL_STORAGE_CART } from 'shared/utils/constants';
import { IPhone } from 'models/IPhone';
import { RootState } from '../store';

export interface ICartState {
  cartItems: IPhone[];
}

const cartStore = localStorage.getItem(LOCAL_STORAGE_CART);

const initialState: ICartState = {
  cartItems: JSON.parse(cartStore ? cartStore : '[]')
};

const cartSlice = createSlice({
  name: 'Cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<IPhone>) => {
      state.cartItems.push(action.payload);
      localStorage.setItem(LOCAL_STORAGE_CART, JSON.stringify(state));
    },
    deleteFromCart: (state, action: PayloadAction<string>) => {
      state.cartItems = state.cartItems.filter(
        ({ id }) => id !== action.payload,
      );

      localStorage.setItem(LOCAL_STORAGE_CART, JSON.stringify(state));
    },
  },
});

export const { addToCart, deleteFromCart } = cartSlice.actions;

export default cartSlice.reducer;

export const getCart = (state: RootState) => state.cart.cartItems;
