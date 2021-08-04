import {
  INCREASE,
  DECREASE,
  CLEAR_CART,
  REMOVE,
  GET_TOTAL,
  GET_AMOUNT,
} from "./actions";

function reducer(state, action) {
  if (action.type === CLEAR_CART) {
    return { ...state, cart: [] };
  }
  if (action.type === INCREASE) {
    return { ...state };
  }

  if (action.type === DECREASE) {
    return { ...state };
  }

  if (action.type === REMOVE) {
    return { ...state };
  }

  if (action.type === GET_AMOUNT) {
    return { ...state };
  }

  if (action.type === GET_TOTAL) {
    return { ...state };
  }
  return state;
}

export default reducer;
