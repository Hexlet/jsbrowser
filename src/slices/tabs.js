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
    renameTab: (state, { payload }) => {
      const tabsWithoutClosedTab = state.tabsList.map((tab) => {
        if (tab.id === payload.id) {
          return { id: tab.id, name: payload.name };
        }
        return tab;
      });
      state.tabsList = tabsWithoutClosedTab;
      if (state.activeTabId !== payload.id) {
        return;
      }
      const tabAddedBeforeClosed = tabsWithoutClosedTab[tabsWithoutClosedTab.length - 1];
      state.activeTabId = tabAddedBeforeClosed?.id || null;
    },
    switchToTab: (state, { payload }) => {
      state.activeTabId = payload.id;
    },
    closeTab: (state, { payload }) => {
      const tabsWithoutClosedTab = state.tabsList.filter((tab) => tab.id !== payload.id);
      state.tabsList = tabsWithoutClosedTab;
      if (state.activeTabId !== payload.id) {
        return;
      }
      const tabAddedBeforeClosed = tabsWithoutClosedTab[tabsWithoutClosedTab.length - 1];
      state.activeTabId = tabAddedBeforeClosed?.id || null;
    },
  },
});

const { actions, reducer } = tabs;

export { actions };

export default reducer;
