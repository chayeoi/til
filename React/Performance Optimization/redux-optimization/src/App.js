import React, { Component } from 'react';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import Grid from '@material-ui/core/Grid';
import Foo from './Foo';
import ConnectedComponent from './ConnectedComponent';
import ConnectedComponentWithOwnProps from './ConnectedComponentWithOwnProps';

const store = configureStore();

class App extends Component {
  state = { value: '' };

  handleChange = e => this.setState({ value: e.target.value });

  handleInit = () => this.setState({ value: '' })

  render() {
    const { handleChange, handleInit } = this;
    const { value } = this.state;

    return (
      <Provider store={store}>
        <Grid container>
          <Grid item xs={12} style={{ backgroundColor: '#FFF59D', padding: '2em' }}>
            <Foo value={value} onChange={handleChange} onInit={handleInit} />
          </Grid>
          <Grid item xs={6} style={{ backgroundColor: '#FFF9C4', padding: '2em' }}>
            <ConnectedComponent bar={value} />
          </Grid>
          <Grid item xs={6} style={{ backgroundColor: '#FFFDE7', padding: '2em' }}>
            <ConnectedComponentWithOwnProps bar={value} />
          </Grid>
        </Grid>
      </Provider>
    );
  }
}

export default App;
