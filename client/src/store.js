import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { postsReducer } from "./reducers/postsReducer";
import thunk from "redux-thunk";

const AppReducer = combineReducers({ posts: postsReducer });

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(AppReducer, composeEnhancers(applyMiddleware(thunk)));

export default store;
