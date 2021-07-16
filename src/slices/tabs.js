/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import _ from 'lodash';

const defaultCurrentTab = _.uniqueId();

const initialState = {
  tabsList: [
    {
      id: defaultCurrentTab,
      name: 'New Tab',
    },
  ],
  currentTabId: defaultCurrentTab,
};

const tabs = createSlice({
  name: 'tabs',
  initialState,
  reducers: {
    addTab: (state, action) => {
      const newTab = action.payload;
      state.tabsList.push(newTab);
    },
    switchTab: (state, action) => {
      const newId = action.payload;
      state.currentTabId = newId;
    },
  },
});

export const { addTab, switchTab } = tabs.actions;
export default tabs.reducer;
