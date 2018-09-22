import React, { Component } from 'react';
// import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { addUser } from './store/userActions';
import { increaseCount, decreaseCount } from './store/countActions';

const mapDispatchToProps = {
  onClick: addUser,
  onIncrease: increaseCount,
  onDecrease: decreaseCount,
}

// function mapDispatchToProps(dispatch) {
//   return bindActionCreators({ onClick: addUser }, dispatch)
// }

class Foo extends Component {
  handleClick = () => {
    this.props.onClick(this.props.value);
    this.props.onInit();
  }

  handleIncreaseClick = () => this.props.onIncrease();

  handleDecreaseClick = () => this.props.onDecrease();

  render() {
    const { handleClick, handleIncreaseClick, handleDecreaseClick } = this;
    const { value, onChange } = this.props;

    return (
      <div>
        <TextField
          label="Name"
          value={value}
          onChange={onChange}
        />
        <Button onClick={handleClick}>Add!</Button>
        <div>
          <Button onClick={handleIncreaseClick}>Increase!</Button>
          <Button onClick={handleDecreaseClick}>Decrease!</Button>
        </div>
      </div>
    );
  }
}

export default connect(
  null,
  mapDispatchToProps,
)(Foo);