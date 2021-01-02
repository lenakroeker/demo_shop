import cartReducer from "./cartReducer";
import statusReducer from "./statusReducer";
import adminReducer from "./adminReducer";
import { combineReducers } from "redux";

const allReducers = combineReducers({
  viewState: statusReducer,
  cartState: cartReducer,
  isAdmin: adminReducer,
});

export default allReducers;
