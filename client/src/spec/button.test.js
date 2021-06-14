import React from 'react';
import ReactDOM from 'react-dom';
import Button from './button';

// const sum = require('./sum');

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Button></Button>, div)
})