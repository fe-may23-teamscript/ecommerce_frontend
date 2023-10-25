import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';

interface IUserState {
  user: string | null;
  isAuthenticated: boolean;
  modal: boolean;
  first: boolean;
}

const initialState: IUserState = {
  user: null,
  isAuthenticated: false,
  modal: false,
  first: true,
};

export const UserSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (state, action: PayloadAction<string>) => {
      state.user = action.payload;
      state.isAuthenticated = true;
    },
    logout: (state) => {
      state.user = null;
      state.isAuthenticated = false;
    },
    toggleModal: (state, action: PayloadAction<boolean>) => {
      state.modal = action.payload;
    },
    toggleFirst: (state, action: PayloadAction<boolean>) => {
      state.first = action.payload;
    },
  },
});

export const { login, logout, toggleModal, toggleFirst } = UserSlice.actions;
export const selectUser = (state: RootState) => state.user;
export default UserSlice.reducer;
