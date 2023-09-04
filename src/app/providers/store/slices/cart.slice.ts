import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { LOCAL_STORAGE_CART } from 'shared/utils/constants';
import { RootState } from '../store';
import { IProductModel } from 'models/IProductModel';

export interface IPhoneWithCount {
  count: number;
  phone: IProductModel;
}

export interface ICartState {
  cartItems: IPhoneWithCount[];
}

const cartStore = localStorage.getItem(LOCAL_STORAGE_CART);

const cartItems = JSON.parse(cartStore ? cartStore : '[]') as IPhoneWithCount[];

const initialState: ICartState = {
  cartItems,
};

const cartSlice = createSlice({
  name: 'Cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<IProductModel>) => {
      state.cartItems.push({ count: 1, phone: action.payload });
      localStorage.setItem(LOCAL_STORAGE_CART, JSON.stringify(state.cartItems));
    },
    deleteFromCart: (state, action: PayloadAction<number>) => {
      state.cartItems = state.cartItems.filter(
        ({ phone }) => phone.id !== action.payload,
      );

      localStorage.setItem(LOCAL_STORAGE_CART, JSON.stringify(state.cartItems));
    },
    increaseCount: (state, action: PayloadAction<number>) => {
      state.cartItems = state.cartItems.map((phone) => {
        if (phone.phone.id === action.payload) {
          return {
            count: phone.count + 1,
            phone: phone.phone,
          };
        }

        return phone;
      });

      localStorage.setItem(LOCAL_STORAGE_CART, JSON.stringify(state.cartItems));
    },
    decreaseCount: (state, action: PayloadAction<number>) => {
      state.cartItems = state.cartItems.map((phone) => {
        if (phone.phone.id === action.payload) {
          return {
            count: phone.count === 1 ? 1 : phone.count - 1,
            phone: phone.phone,
          };
        }

        return phone;
      });

      localStorage.setItem(LOCAL_STORAGE_CART, JSON.stringify(state.cartItems));
    },
    clearCart: (state) => {
      state.cartItems = [];
      localStorage.removeItem(LOCAL_STORAGE_CART);
    },
  },
});

export const {
  addToCart,
  deleteFromCart,
  increaseCount,
  decreaseCount,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;

export const getCart = (state: RootState) => state.cart;

export const getTotalPrice = (state: RootState) =>
  state.cart.cartItems.reduce((previous, current) => {
    return previous + current.phone.priceDiscount * current.count;
  }, 0);

export const getTotalCount = (state: RootState) =>
  state.cart.cartItems.reduce((previous, current) => {
    return previous + current.count;
  }, 0);
