import React from 'react';
import renderer from 'react-test-renderer';
import Counter from './Counter';

describe('Counter', () => {
  let component = null;

  it('renders correctly', () => {
    component = renderer.create(<Counter />);
  });

  it('matches snapshot', () => {
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  })

  it('increases correctly', () => {
    component.getInstance().onIncrease();
    expect(component.getInstance().state.value).toBe(2);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('decreases correctly', () => {
    component.getInstance().onDecrease();
    expect(component.getInstance().state.value).toBe(1);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
