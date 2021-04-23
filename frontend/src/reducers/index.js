import { combineReducers } from "redux";
import orderReducer from "../modules/Checkout/orderReducer";
import revenueReducer from "../modules/Revenue/revenueReducer";
import showsReducer from "../modules/Shows/showsReducer";

export default combineReducers({
  shows: showsReducer,
  currentOrder: orderReducer,
  revenue: revenueReducer,
});
