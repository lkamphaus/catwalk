import React from 'react';
import '@testing-library/jest-dom';
// import { render } from '@testing-library/react';
// import App from './App.js';

// describe("App testing", () => {
//   test("render the App header", () => {
//     const { getByText } = render(<App />);
//     const linkElement = getByText("Does this work?");
//     expect(linkElement).toBeInTheDocumen();
//   });
// });


import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});