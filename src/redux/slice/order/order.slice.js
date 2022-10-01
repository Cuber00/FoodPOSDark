import { createSlice } from '@reduxjs/toolkit';
import { fetchIdNewOrder } from './orderAPI';

export const orderSlice = createSlice({
  name: 'orderSlice',
  initialState: {
    newOrder: {
      id: null,
      userId: null,
      typeOrderId: 0,
      error: null,
      menu: [],
    },
  },
  reducers: {
    setNotes: (state, action) => {
      state.newOrder.menu.filter((i) => i.dishesId === action.payload.dishesId)[0].notes =
        action.payload.value;
    },
    hidenModalOrder: (state) => {
      state.newOrder.id = null;
    },
    addDishesOrder: (state, action) => {
      const { id, image, available, price, title } = action.payload;
      if (state.newOrder.menu.some((i) => i.dishesId === id)) {
        state.newOrder.menu.filter((i) => i.dishesId === id)[0].count++;
      } else {
        state.newOrder.menu.push({
          dishesId: id,
          typeOrder: [0, 2],
          title: title,
          image: image,
          price: price,
          available: available,
          notes: '',
          count: 1,
        });
      }
    },
    handleCount: (state, action) => {
      const { dishesId, type } = action.payload;
      const dishes = state.newOrder.menu.filter((i) => i.dishesId === dishesId)[0];
      if (type === 'increment') {
        dishes.count++;
      } else {
        dishes.count--;
        if (dishes.count <= 0) {
          state.newOrder.menu = state.newOrder.menu.filter((i) => i.dishesId !== dishesId);
        }
        if (state.newOrder.menu.length === 0) {
          state.newOrder = {
            id: null,
            userId: null,
            typeOrderId: 0,
            menu: [],
          };
        }
      }
    },
  },
  extraReducers: {
    [fetchIdNewOrder.fulfilled]: (state, action) => {
      state.newOrder.id = action.payload.length;
    },
    [fetchIdNewOrder.rejected]: (state, action) => (state.newOrder.error = action.payload),
  },
});

export const menuOrderSl = (state) => state.order.newOrder.menu;
export const isOpenOrderSl = (state) => !!state.order.newOrder.id;
export const idOrderSl = (state) => state.order.newOrder.id;

export const { setNotes, handleCount, hidenModalOrder, addDishesOrder } = orderSlice.actions;

export default orderSlice.reducer;
