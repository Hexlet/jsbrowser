import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from './store.js';
import App from './App.jsx';

test('Work', async () => {
  const vdom = (
    <Provider store={store}>
      <App />
    </Provider>
  );

  render(vdom);

  expect(await screen.findByText('New Tab')).toBeInTheDocument();
});
