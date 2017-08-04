import createReducer from '../config/createReducer'
import * as types from '../actions/types'

export const orders = createReducer ({}, {
  [types.SET_ORDERS](state, action) {
    state = action.orders;
    return state;
  },
  [types.SET_STATUS](state, action) {
    // let all = state;
    // all[action.id]['status'] = action.status;
    // return all;

    let order = state[action.id];
    order.status = action.status;
    return {...state, [action.id] : order};
  }
})