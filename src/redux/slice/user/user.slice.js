import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { FULFILLED, LOGIN, PENDING, REGISTER, REJECTED } from 'redux/CONSTANTS';
import { fetchIdNewOrder } from '../order/orderAPI';

export const fetchRegister = createAsyncThunk('userSlice/fetchRegister', async (obj) => {
  const { data } = await axios.post(REGISTER, obj);
  return data;
});
export const fetchLogin = createAsyncThunk('userSlice/fetchLogin', async (obj) => {
  const { data } = await axios.post(LOGIN, obj);
  return data;
});

export const userSlice = createSlice({
  name: 'userSlice',
  initialState: {
    user: null,
    login: {
      isOpen: false,
      status: null,
      error: null,
    },
    register: {
      isOpen: false,
      status: null,
      error: null,
    },
  },
  reducers: {
    setUser: (state, action) => {
      console.log(action);
      state.user = action.payload;
    },
    openLogin: (state, action) => {
      state.login.isOpen = action.payload;
    },
    openSignUp: (state, action) => {
      state.register.isOpen = action.payload;
    },
  },
  extraReducers: {
    [fetchLogin.pending]: (state, action) => {
      state.login.status = PENDING;
    },
    [fetchLogin.fulfilled]: (state, action) => {
      localStorage.setItem('user', JSON.stringify(action.payload.user));
      state.user = action.payload.user;
      state.login.status = FULFILLED;
      state.login.error = null;
      state.login.isOpen = false;
    },
    [fetchLogin.rejected]: (state, action) => {
      state.login.status = REJECTED;
      state.login.error = action.payload;
    },
    [fetchRegister.pending]: (state) => {
      state.register.status = PENDING;
    },
    [fetchRegister.fulfilled]: (state, action) => {
      localStorage.setItem('user', JSON.stringify(action.payload.user));
      state.user = action.payload.user;
      state.register.status = FULFILLED;
      state.register.error = null;
    },
    [fetchRegister.rejected]: (state, action) => {
      state.register.status = REJECTED;
      state.register.error = action.payload;
    },
  },
});

export const userSl = (state) => state.user.user;
export const openLoginSl = (state) => state.user.login.isOpen;
export const openSignUpSl = (state) => state.user.register.isOpen;
export const registerStatusSl = (state) => state.user.register.status;
export const registerErrorSl = (state) => state.user.register.error;
export const loginStatusSl = (state) => state.user.login.status;

export const { setUser, openLogin, openSignUp } = userSlice.actions;
export default userSlice.reducer;
