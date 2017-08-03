import * as types from './types'

export function setOrders(orders) {
  return {
    type: types.SET_ORDERS,
    orders
  }
}

export function fetchOrders() {
  return(dispatch, getState) => {
    fetch('https://sheltered-plateau-48256.herokuapp.com/getMenuPositions')
    .then(response => {
    return response.text()
    })
    .then((responseText) => {
      ordersJson = JSON.parse(responseText)
      let orders = ordersJson.reduce((map, obj) => {
        map[obj.id] = obj;
        return map;
      }, {});
      dispatch(setOrders(orders));
    })    
  }
}