import * as types from './types'

export function setOrders(orders) {
  return {
    type: types.SET_ORDERS,
    orders
  }
}

export function fetchOrders() {
  return(dispatch, getState) => {
    let ordersJson = require("../../../orders.json");
    let orders = ordersJson.reduce((map, obj) => {
      map[obj.id] = obj;
      return map;
    }, {});
    dispatch(setOrders(orders));
  }
}