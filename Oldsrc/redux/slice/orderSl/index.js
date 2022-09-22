import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import APIService, { SERVER_RESPONSE } from '../../constants/apiServices';

export const fetchOrderId = createAsyncThunk('orderSlice/fetchOrderId', async () => {
  return await axios.get(APIService.ordersUrl).then((res) => res.data);
});

export const fetchAddOrder = createAsyncThunk(
  'orderSlice/fetchAddOrder',
  async (data, { rejectWithValue }) => {
    try {
      return await axios
        .post(APIService.ordersUrl, data)
        .then((res) => res.data)
        .catch((error) => {
          throw new Error(error);
        });
    } catch (error) {
      rejectWithValue(error);
    }
  },
);

export const fetchOrderList = createAsyncThunk(
  'orderSlice/fetchOrderList',
  async (_, { rejectWithValue }) => {
    try {
      return await axios
        .get(APIService.ordersUrl)
        .then((res) => res.data)
        .catch((error) => {
          throw new Error(error);
        });
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

export const orderSl = createSlice({
  name: 'orderSlice',
  initialState: {
    newOrder: {
      id: null,
      username: null,
      date: { days: 2, month: 9, year: 2022 },
      dineIn: [1, 2, 3],
      menu: [],
      totalPayment: null,
      status: 'pending',
    },
    listOrder: [],
    status: null,
    idOrder: null,
    isOpenWindow: false,
    isShowPaymentWindow: false,
    error: null,
  },
  reducers: {
    setOpenWindow: (state, action) => {
      state.isOpenWindow = action.payload;
    },
    setOpenPaymentWindow: (state, action) => {
      state.isShowPaymentWindow = action.payload;
    },
    addOrderItem: (state, action) => {
      if (state.newOrder.id === action.payload.id) {
        const order = state.newOrder;
        if (order.menu.some((i) => i.id === action.payload.menu.id)) {
          order.menu.filter((i) => i.id === action.payload.menu.id)[0].count++;
        } else {
          order.menu.push({ ...action.payload.menu, count: 1 });
        }

        order.totalPayment = order.menu
          .reduce((accumulator, item) => accumulator + item.price * item.count, 0)
          .toFixed(2);
      } else {
        state.newOrder = {
          ...state.newOrder,
          id: action.payload.id,
          username: 'Eren Jaegar',
          menu: [{ ...action.payload.menu, count: 1 }],
          totalPayment: action.payload.menu.price,
        };
      }
    },
    handleCountItem: (state, action) => {
      const menu = state.newOrder.menu;
      let dishes = menu.filter((i) => i.id === action.payload.id)[0];
      if (action.payload.type === 'increment') dishes.count++;
      else if (action.payload.type === 'decrement') {
        dishes.count--;
        if (dishes.count === 0) {
          state.newOrder.menu = menu.filter((i) => i.id !== action.payload.id);
          if (state.newOrder.menu.length === 0) state.isOpenWindow = false;
        }
      }
    },
    setNotes: (state, action) => {
      state.newOrder.menu.filter((i) => i.id === action.payload.id)[0].notes = action.payload.value;
    },
  },
  extraReducers: {
    [fetchOrderId.fulfilled]: (state, action) => {
      state.idOrder = action.payload.length + 1;
    },
    [fetchOrderList.pending]: (state) => {
      state.saveOrder = [...state.order];
      state.status = SERVER_RESPONSE.pending;
    },
    [fetchOrderList.fulfilled]: (state, action) => {
      state.status = SERVER_RESPONSE.fulfilled;
      state.order = action.payload;
    },
    [fetchOrderList.rejected]: (state, action) => {
      state.status = SERVER_RESPONSE.rejected;
      state.error = action.payload;
    },
    [fetchAddOrder.pending]: (state, action) => {},
    [fetchAddOrder.fulfilled]: (state, action) => {
      state.error = null;
      state.order = [];
      state.idOrder = action.payload.id + 1;
      state.status = null;
      state.isShowPaymentWindow = false;
      state.isOpenWindow = false;
      state.saveOrder = null;
    },
    [fetchAddOrder.rejected]: (state, action) => {},
  },
});

export const {
  setOpenWindow,
  handleOrder,
  addOrderItem,
  handleCountItem,
  setNotes,
  setOpenPaymentWindow,
} = orderSl.actions;

export default orderSl.reducer;
