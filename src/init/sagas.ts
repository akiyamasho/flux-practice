import { all } from "redux-saga/effects";
import createSagaMiddleware from "redux-saga";

export const sagaMiddleware = createSagaMiddleware();

export function* rootSaga() {
    yield all([]);
}
