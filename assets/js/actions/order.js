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
      let ordersJson = JSON.parse(responseText)
      let orders = ordersJson.reduce((map, obj) => {
        map[obj.id] = obj;
        return map;
      }, {});
      dispatch(setOrders(orders));
    })    
  }
}

export function setStatus(status, id) {
  return {
    type: types.SET_STATUS,
    status,
    id
  }
}

export function sendOrder(id, status) {
  return(dispatch, getState) => {
    let order = getState().orders[id];
    order['status'] = status;
    console.log("id to change: " + id);
    //console.log(status);
    console.log(order['tableNumber']);

    dispatch(setStatus(status, id));

    fetch('http://rocky-garden-79199.herokuapp.com/postOrder', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(order)
    })
    .then(response => {
    console.log(response.text())
    })
  }
}
