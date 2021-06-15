// import React from 'react';
// // import ReactDOM from 'react-dom';
// import { render } from '@testing-library/react';
// import Button from './button.jsx';
// import App from './App.js';

// import Adapter from 'enzyme-adapter-react-16';
// import { shallow, configure } from 'enzyme';

// configure({adapter: new Adapter()});

// // it('renders without crashing', () => {
// //   // shallow(<App />)
// //   // const div = document.createElement('div');
// //   const div = shallow(<div></div>)
// //   ReactDOM.render(<App/>, div)
// // });

// it('App', () => {
//   const app = shallow(<App />);
//   expect(1).toEqual(1);
// });


// it('renders button correctly', () => {
//   const {getByTestId} = render(<Button label="click me please"></Button>);
//   expect(getByTestId('button')).toHaveTextContent("click me please");
// });