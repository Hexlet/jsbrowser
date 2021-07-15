import { createSlice } from '@reduxjs/toolkit';

const defaultCurrentTab = 1;

const tabs = createSlice({
  name: 'tabs',
  initialState: { tabs: [{ id: 1, name: 'New Tab' }], currentTabId: defaultCurrentTab },
  reducers: {
    addTab: (state, action) => {
      const newTab = action.payload;
      state.tabs.push(newTab);
    },
  },
});

export const { addTab } = tabs.actions;
export default tabs.reducer;
