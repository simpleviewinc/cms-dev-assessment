import React from 'react';
import ReactDOM from 'react-dom';
import Navigation from './Navigation'
import renderer from 'react-test-renderer';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Navigation />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders the UI as expected',() => {
  const tree = renderer
    .create(<Navigation />)
    .toJSON();
  expect(tree).toMatchSnapshot();  
  });