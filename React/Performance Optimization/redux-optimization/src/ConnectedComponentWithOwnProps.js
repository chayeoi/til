import React, { Component } from 'react';
import { connect } from 'react-redux';

function mapStateToProps({ user }, ownProps) {
  console.log('ConnectedComponentWithOwnProps');
  return {
    list: user.list,
  };
}

class ConnectedComponentWithOwnProps extends Component {
  render() {
    const { list } = this.props;

    return (
      <div>
        <h2>ConnectedComponentWithOwnProps</h2>
        <ul>
          {list.map(item => (
            <li key={item}>
              {item}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
)(ConnectedComponentWithOwnProps);