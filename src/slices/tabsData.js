/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const updateTabData = createAsyncThunk('tabsData/updateTabData', async ({ activeTabId, url }) => {
  const response = await fetch(url);
  const htmlDoc = await response.text();
  const data = { [activeTabId]: htmlDoc };
  return { data, url: { [activeTabId]: url } };
});

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
  },
  extraReducers(builder) {
    builder.addCase(updateTabData.fulfilled, (state, { payload }) => {
      const { data, url } = payload;
      state.data = { ...state.data, ...data };
      state.currentLinks = { ...state.currentLinks, ...url };
    });
  },
});

const { actions, reducer } = tabsData;

export { actions };

export default reducer;
