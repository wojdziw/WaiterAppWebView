import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import { ActionCreators } from './actions'
import { connect } from 'react-redux'
import { NavBar } from './components/NavBar.js'
import { Order } from './components/Order.js'

class Hello extends Component {

  componentWillMount() {
    this.props.fetchOrders();
  }

  render() {
    return (
      <div>
        <NavBar />
        <Order />
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ActionCreators, dispatch);
}
function mapStateToProps(state) {
  return {
    orders: state.orders
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(Hello);