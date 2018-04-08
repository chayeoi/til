import React, { Component, createContext } from 'react';
import createUseConsumer from '../lib/createUseConsumer';

const Context = createContext();

const {
  Provider,
  Consumer: AnotherConsumer
} = Context;

class AnotherProvider extends Component {
  state = {
    number: 1,
  }
  actions = {
    increment: () => {
      this.setState(
        ({ number }) => ({ number: number + 1 })
      );
    }
  }
  render() {
    const { state, actions } = this;
    const value = { state, actions };
    return (
      <Provider value={value}>
        {this.props.children}
      </Provider>
    );
  }
}

const useAnother = createUseConsumer(AnotherConsumer);

export {
  AnotherProvider,
  AnotherConsumer,
  useAnother
};