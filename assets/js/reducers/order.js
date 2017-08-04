import createReducer from '../config/createReducer'
import * as types from '../actions/types'

export const orders = createReducer ({"orders": {}}, {
  [types.SET_ORDERS](state, action) {
    state = action.orders;
    return state;
  },
  [types.SET_STATUS](state, action) {
    let all = state;
    all[action.id]['status'] = action.status;
    return all;
  }
})