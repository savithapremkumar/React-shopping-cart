import { createStore, applyMiddleware } from "redux";
import { createLogger } from "redux-logger";
import cartReducer from "./reducers/cart";
import { composeWithDevTools } from "redux-devtools-extension";

// // Will log information about dispatched actions to the console
// // including the previous state, the action details, and the next state
const loggerMiddleware = createLogger();

//Will need to replace composewithdevtools with compose for production
const store = createStore(
  cartReducer,
  composeWithDevTools(
    // Middlware can intercept dispatched actions before they reach the reducer
    // in order to modify it in some way
    applyMiddleware(loggerMiddleware)
    // other store enhancers if any
  )
);


export default store;
