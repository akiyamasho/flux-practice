import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import { sagaMiddleware } from "./sagas";

import apiRequestStatusReducer from "../api/reducer";
import localeReducer from "../locale/reducer";

declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: any;
    }
}

export const rootReducer = (
    state: any,
    action: { type: string; payload?: Object }
) =>
    combineReducers({
        apiRequestStatus: apiRequestStatusReducer,
        locale: localeReducer,
    })(state, action);
const initialState = rootReducer(undefined, { type: "" });
const composeEnhancers =
    // eslint-disable-next-line no-underscore-dangle
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
    rootReducer,
    initialState,
    composeEnhancers(applyMiddleware(sagaMiddleware))
);
