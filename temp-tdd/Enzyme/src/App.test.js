import React from 'react';
import renderer from 'react-test-renderer';
import App from './App';

describe('App', () => {
  let component = null;

  it('renders correctly', () => {
    component = renderer.create(<App />);
  });

  it('matches snapshot', () => {
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
