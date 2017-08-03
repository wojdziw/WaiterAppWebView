import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import store from './config/store';
import { Provider } from 'react-redux'
import Main from './Main'

class Index extends Component {
  render() {
    return (
      <Provider store={store}>
        <Main {...this.props}/>
      </Provider>
    )
  }
}

ReactDOM.render(<Index />, document.getElementById('container'))