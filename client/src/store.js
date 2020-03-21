import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { postsReducer } from "./reducers/postsReducer";
import thunk from "redux-thunk";
import { appReducer } from "./reducers/appReducer";

const RootReducer = combineReducers({ posts: postsReducer, app: appReducer });

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  RootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

export default store;
