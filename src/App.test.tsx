import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders the table', () => {
  const el = render(<App />)
  expect(el.container.getElementsByClassName('key-card').length).toBe(1);
  expect(el.container.getElementsByTagName('tr').length).toBe(5);
  expect(el.container.getElementsByTagName('td').length).toBe(25)
});
