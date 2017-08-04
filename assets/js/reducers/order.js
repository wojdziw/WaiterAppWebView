import createReducer from '../config/createReducer'
import * as types from '../actions/types'

export const orders = createReducer ({}, {
  [types.SET_ORDERS](state, action) {
    let newOrders = action.orders;
    for (key in newOrders) {
      console.log(key);
    }

    state = action.orders;
    return state;

    
  },
  [types.SET_STATUS](state, action) {
    let order = state[action.id];
    order.status = action.status;
    return {...state, [action.id] : order};
  }
})