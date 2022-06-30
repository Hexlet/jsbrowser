/* eslint-disable import/prefer-default-export */

export const activeTabIdSelector = (state) => state.tabs.activeTabId;

export const tabsListSelector = (state) => state.tabs.tabsList;

export const tabsDataSelector = (state) => state.tabsData.data;

export const currentLinksSelector = (state) => state.tabsData.currentLinks;

export const historyTabsSelector = (state) => state.tabsData.history;
