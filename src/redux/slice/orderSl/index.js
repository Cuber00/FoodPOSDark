import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import APIService from '../../constants/apiServices';

export const fetchOrderId = createAsyncThunk('orderSlice/fetchOrderId', async () => {
  return await axios.get(APIService.ordersUrl).then((res) => res.data);
});

export const orderSl = createSlice({
  name: 'orderSlice',
  initialState: {
    order: [],
    idOrder: null,
    isOpenWindow: false,
    isShowPaymentWindow: false,
    error: null,
  },
  reducers: {
    setIsOpenWindow: (state, action) => {
      state.isOpenWindow = action.payload;
    },
    addOrderItem: (state, action) => {
      if (state.order.some((i) => i.id === action.payload.id)) {
        state.order.filter((i) => i.id === action.payload.id)[0].count++;
      } else {
        state.order.push({ ...action.payload, count: 1, notes: '' });
      }
    },
    handleCountItem: (state, action) => {
      if (action.payload.type === 'increment')
        state.order.filter((i) => i.id === action.payload.id)[0].count++;
      else if (action.payload.type === 'decrement') {
        state.order.filter((i) => i.id === action.payload.id)[0].count--;
        if (state.order.filter((i) => i.id === action.payload.id)[0].count === 0) {
          state.order = state.order.filter((i) => i.id !== action.payload.id);
          if (state.order.length === 0) state.isOpenWindow = false;
        }
      }
    },
    setNotes: (state, action) => {
      state.order.filter((i) => i.id === action.payload.id)[0].notes = action.payload.value;
    },
    toggleShowPaymentWindow: (state, action) => {
      state.isShowPaymentWindow = action.payload;
    },
  },
  extraReducers: {
    [fetchOrderId.fulfilled]: (state, action) => {
      state.idOrder = action.payload.length + 1;
    },
  },
});

export const { setIsOpenWindow, addOrderItem, handleCountItem, setNotes, toggleShowPaymentWindow } =
  orderSl.actions;

export default orderSl.reducer;
