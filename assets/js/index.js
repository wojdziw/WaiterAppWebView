import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import store from './config/store';
import { Provider } from 'react-redux'
import Hello from './Hello'

class Index extends Component {
  render() {
    return (
      <Provider store={store}>
        <Hello {...this.props}/>
      </Provider>
    )
  }
}

ReactDOM.render(<Index />, document.getElementById('container'))