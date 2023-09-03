import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { LOCAL_STORAGE_CART } from 'shared/utils/constants';
import { RootState } from '../store';
import { IProductModel } from 'models/IProductModel';

export interface ICartState {
  cartItems: IProductModel[];
}

const cartStore = localStorage.getItem(LOCAL_STORAGE_CART);

const initialState: ICartState = {
  cartItems: JSON.parse(cartStore ? cartStore : '[]'),
};

const cartSlice = createSlice({
  name: 'Cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<IProductModel>) => {
      state.cartItems.push(action.payload);
      localStorage.setItem(LOCAL_STORAGE_CART, JSON.stringify(state));
    },
    deleteFromCart: (state, action: PayloadAction<string>) => {
      state.cartItems = state.cartItems.filter(
        ({ id }) => id !== +action.payload,
      );

      localStorage.setItem(LOCAL_STORAGE_CART, JSON.stringify(state));
    },
  },
});

export const { addToCart, deleteFromCart } = cartSlice.actions;

export default cartSlice.reducer;

export const getCart = (state: RootState) => state.cart.cartItems;
