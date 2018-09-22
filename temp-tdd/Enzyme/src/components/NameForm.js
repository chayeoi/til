import React, { Component } from 'react';

class NameForm extends Component {
  static defaultProps = {
    onSubmit: () => console.warn('onSubmit not defined'),
  }

  state = {
    name: ''
  }

  onChange = (e) => {
    this.setState({
      name: e.target.value
    });
  }

  onSubmit = (e) => {
    const { name } = this.state;
    const { onInsert } = this.props;
    onInsert(name);
    this.setState({
      name: ''
    });
    e.preventDefault();
  }

  render() {
    const { onSubmit, onChange } = this;
    const { name } = this.state;
    return (
      <form onSubmit={onSubmit}>
        <label>이름</label>
        <input type="text" value={name} onChange={onChange} />
        <button type="submit">등록</button>
      </form>
    );
  }
}

export default NameForm;
