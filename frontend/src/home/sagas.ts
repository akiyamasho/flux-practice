import { take, call, put } from "redux-saga/effects";
import { dispatchSetModelPredictions, GET_MODEL_PREDICTIONS } from "./actions";
import {
    dispatchSetRequestError,
    dispatchSetRequestLoading,
} from "../api/actions";
import { callGetModelPredictions } from "./api";

export function* getModelPredictionsSaga() {
    while (true) {
        yield take(GET_MODEL_PREDICTIONS);

        yield put(
            dispatchSetRequestLoading({
                actionType: GET_MODEL_PREDICTIONS,
                isLoading: true,
            })
        );

        try {
            const { modelPredictions } = yield call(callGetModelPredictions);

            yield put(dispatchSetModelPredictions(modelPredictions));
        } catch (error) {
            yield put(
                dispatchSetRequestError({
                    actionType: GET_MODEL_PREDICTIONS,
                    errorLabelId: "error.auth.serverError",
                })
            );
        } finally {
            yield put(
                dispatchSetRequestLoading({
                    actionType: GET_MODEL_PREDICTIONS,
                    isLoading: false,
                })
            );
        }
    }
}
