import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {
  dropDownReducer,
  mcqResultsReducer,
  trueFalseReducer,
} from "./reducer/mcqReducer";

const reducer = combineReducers({
  mcq: mcqResultsReducer,
  trueorfalse: trueFalseReducer,
  dropDown: dropDownReducer,
});

const middleware = [thunk];

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
