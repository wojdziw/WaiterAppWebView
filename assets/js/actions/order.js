import * as types from './types'

export function setOrders(orders) {
  return {
    type: types.SET_ORDERS,
    orders
  }
}

export function fetchOrders() {
  return(dispatch, getState) => {
    var headers = new Headers();
    headers.append('Access-Control-Allow-Origin', 'http://localhost:5000');
    headers.append('Access-Control-Allow-Credentials', 'true');
    
    fetch('https://rocky-garden-79199.herokuapp.com/getActiveOrders', {headers: headers})
    .then(response => {
    return response.text()
    })
    .then((responseText) => {
      console.log(responseText)
      let ordersJson = JSON.parse(responseText)
      let orders = ordersJson.reduce((map, obj) => {
        map[obj.id] = obj;
        return map;
      }, {});
      dispatch(setOrders(orders));
    })    
  }
}
