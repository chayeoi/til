import React, { Component } from 'react';
import { connect } from 'react-redux';

function mapStateToProps({ user }) {
  console.log('ConnectedComponent');
  return {
    list: user.list,
  };
}

class ConnectedComponent extends Component {
  render() {
    const { list } = this.props;

    return (
      <div>
        <h2>ConnectedComponent</h2>
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
)(ConnectedComponent);