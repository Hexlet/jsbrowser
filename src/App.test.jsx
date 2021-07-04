import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App.jsx';

test('renders tab 1', () => {
  render(<App />);
  const linkElement = screen.getByText(/Tab 1/i);
  expect(linkElement).toBeInTheDocument();
});
