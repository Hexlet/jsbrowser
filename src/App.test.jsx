import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import App from './App.jsx';

describe('With React Testing Library', () => {
  const defaultCurrentTab = '1';
  const initialState = {
    tabs: {
      tabsList: [
        {
          id: defaultCurrentTab,
          name: 'New Tab',
        },
      ],
      currentTabId: defaultCurrentTab,
    },
  };

  const mockStore = configureStore();
  let store; // eslint-disable-line

  it('Shows "New Tab"', () => {
    store = mockStore(initialState);
    const { getByText } = render(<Provider store={store}><App /></Provider>);
    expect(getByText('New Tab')).not.toBeNull();
  });
});
