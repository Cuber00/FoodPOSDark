import { createSlice } from '@reduxjs/toolkit';
import { fetchIdNewOrder } from './orderAPI';

export const orderSlice = createSlice({
  name: 'orderSlice',
  initialState: {
    newOrder: {
      id: null,
      userId: null,
      typeOrderId: 0,
      menu: [
        {
          dishesId: 3,
          typeOrder: [0, 2],
          title: 'Spicy seasoned seafood noodles',
          image: 'http://localhost:3000/assets/images/3.png',
          price: 2.29,
          available: 15,
          count: 1,
        },
        {
          dishesId: 4,
          typeOrder: [0, 2],
          title: 'Spicy seasoned seafood noodles',
          image: 'http://localhost:3000/assets/images/4.png',
          price: 2.29,
          available: 15,
          count: 1,
        },
        {
          dishesId: 5,
          typeOrder: [0, 2],
          title: 'Spicy seasoned seafood noodles',
          image: 'http://localhost:3000/assets/images/5.png',
          price: 2.29,
          available: 15,
          count: 1,
        },
        {
          dishesId: 6,
          typeOrder: [0, 2],
          title: 'Spicy seasoned seafood noodles',
          image: 'http://localhost:3000/assets/images/6.png',
          price: 2.29,
          available: 15,
          count: 1,
        },
      ],
    },
  },
  reducers: {
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
      }
    },
  },

  extraReducers: {
    [fetchIdNewOrder.fulfilled]: (state, action) => (state.newOrder.id = action.payload.length + 1),
  },
});

export const menuOrderSl = (state) => state.order.newOrder.menu;

export const { handleCount } = orderSlice.actions;

export default orderSlice.reducer;
