/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import uniqueId from 'lodash/uniqueId';

const defaultActiveTabId = uniqueId();
const defaultTabName = 'New Tab';

const initialState = {
  tabsList: [
    {
      id: defaultActiveTabId,
      name: defaultTabName,
    },
  ],
  activeTabId: defaultActiveTabId,
};

const tabs = createSlice({
  name: 'tabs',
  initialState,
  reducers: {
    addNewTab: (state) => {
      const newId = uniqueId();

      state.tabsList.push({ id: newId, name: defaultTabName });
      state.activeTabId = newId;
    },
    switchToTab: (state, { payload }) => {
      state.activeTabId = payload.id;
    },
  },
});

const { actions, reducer } = tabs;

export { actions };

export default reducer;
