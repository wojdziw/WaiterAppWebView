import createReducer from '../config/createReducer'
import * as types from '../actions/types'

export const orders = createReducer ({}, {
  [types.SET_ORDERS](state, action) {
    let newOrders = action.orders;
    
    // this is a biiiiig hack. Trying to keep the old state in case db wants to bypass it
    for (var key in newOrders) {
      if (key in state) {
        newOrders[key] = state[key];
      }
    }

    state = action.orders;
    return newOrders;

    
  },
  [types.SET_STATUS](state, action) {
    let order = state[action.id];
    order.status = action.status;
    return {...state, [action.id] : order};
  }
})