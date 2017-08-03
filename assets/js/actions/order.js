import * as types from './types'

export function setOrders(orders) {
  return {
    type: types.SET_ORDERS,
    orders
  }
}

export function fetchOrders() {
  return(dispatch, getState) => {
    let orders = require("../../../orders.json");
    dispatch(setOrders(orders));
  }
}