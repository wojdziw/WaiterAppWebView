import createReducer from '../config/createReducer'
import * as types from '../actions/types'

export const orders = createReducer ({"orders": {}}, {
  [types.SET_ORDERS](state, action) {
    state = action.orders;
    return state;
  }
})