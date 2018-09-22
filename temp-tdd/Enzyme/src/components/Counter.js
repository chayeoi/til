import React, { Component } from 'react';

class Counter extends Component {
  state = {
    value: 1
  }

  onIncrease = () => {
    this.setState(({value}) => ({ value: value + 1 }));
  }

  onDecrease = () => {
    this.setState(({value}) => ({ value: value - 1 }));
  }

  render() {
    const { value } = this.state;
    const { onIncrease, onDecrease } = this;
    return (
      <div>
        <h1>I am Counter.</h1>
        <h2>{value}</h2>
        <button onClick={onIncrease}>+</button>
        <button onClick={onDecrease}>-</button>
      </div>
    );
  }
}

export default Counter;
