import { combineReducers } from "redux";
import token from "./token-slices";
import cartSlice from "./cart-slice";
const rootReducer = combineReducers({
  token: token,
  cart: cartSlice,
});

export default rootReducer;
