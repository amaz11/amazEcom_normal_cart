import { combineReducers } from "redux";
// import { composeWithDevTools } from "redux-devtools-extension";
import { itemReducer } from "./itemsReducer";
import { cartReducer } from "./cartReducer";
import { createForms } from "react-redux-form";
import { initialForms } from "./forms";

export const rootReducer = combineReducers({
  itemReducer,
  cartReducer,
  ...createForms({
    products: initialForms})
});
