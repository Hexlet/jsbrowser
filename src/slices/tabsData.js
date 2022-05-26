/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  data: {},
};

const tabsData = createSlice({
  name: 'tabsData',
  initialState,
  reducers: {
    addTabData: (state, { payload }) => {
      state.data = { ...state.data, ...payload };
    },
  },
});

const { actions, reducer } = tabsData;

export { actions };

export default reducer;
