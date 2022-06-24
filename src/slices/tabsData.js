/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  data: {},
  history: {},
  currentLinks: {},
};

const tabsData = createSlice({
  name: 'tabsData',
  initialState,
  reducers: {
    addTabData: (state, { payload }) => {
      const { url, tabData, tabId } = payload;
      state.data = { ...state.data, ...tabData };
      state.history[tabId] = tabId in state.history ? [...state.history[tabId], url] : [url];
      state.currentLinks = { ...state.currentLinks, [tabId]: url };
    },
    updateTabData: (state, { payload }) => {
      state.data = { ...state.data, ...payload };
    },
  },
});

const { actions, reducer } = tabsData;

export { actions };

export default reducer;
