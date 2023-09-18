import {
  legacy_createStore as createStore,
  combineReducers,
  applyMiddleware,
} from "redux";
import TodoReducer from "./reducers/TodoReducers";

import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

export const reducer = combineReducers({
  // this containes all the reducers
  Todo: TodoReducer,
});

const initialState = {};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);
export default store;
