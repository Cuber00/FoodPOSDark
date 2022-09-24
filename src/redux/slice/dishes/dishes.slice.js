import { createSlice } from '@reduxjs/toolkit';
import { fetchDishes, fetchTypeOrder } from './dishesAPI';

export const dishesSlice = createSlice({
  name: 'dishesSlice',
  initialState: {
    dishes: null,
    typeOrder: null,
    activeTypeOrder: 0,
    searcQuery: '',
  },
  reducers: {
    setTypeOrder: (state, action) => {
      state.activeTypeOrder = action.payload;
    },
    setSearchQuery: (state, action) => {
      state.searcQuery = action.payload;
    },
  },
  extraReducers: {
    [fetchDishes.fulfilled]: (state, actions) => {
      state.dishes = actions.payload;
    },

    [fetchTypeOrder.fulfilled]: (state, actions) => {
      state.typeOrder = actions.payload;
    },
  },
});

export const dishes = (state) => state.dishes.dishes;
export const typeOrder = (state) => state.dishes.typeOrder;
export const idTypeOrderSelector = (state) => state.dishes.activeTypeOrder;
export const searchQuerySelector = (state) => state.dishes.searcQuery;

export const { setTypeOrder, setSearchQuery } = dishesSlice.actions;

export default dishesSlice.reducer;
