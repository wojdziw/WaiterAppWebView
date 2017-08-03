import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import { ActionCreators } from './actions'
import { connect } from 'react-redux'
import { NavBar } from './components/NavBar.js'
import { Order } from './components/Order.js'

class Main extends Component {

  componentWillMount() {
    this.props.fetchOrders();
  }

  render() {
    return (
      <div>
        <NavBar />
        {Object.values(this.props.orders).map((position) => {
          return (
            <Order key={position.id} id={position.id} {...this.props}/>
          )
        })}
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
export default connect(mapStateToProps, mapDispatchToProps)(Main);