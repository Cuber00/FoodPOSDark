import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    userName: null,
    email: null,
    isOpen: true,
  },
  reducers: {},
});

export default userSlice.reducer;
