import { HomeActions, SetModelPredictionsPayload } from "./types";

export const GET_MODEL_PREDICTIONS: HomeActions = "GET_MODEL_PREDICTIONS";
export const dispatchGetModelPredictions = () => ({
    type: GET_MODEL_PREDICTIONS,
});

export const SET_MODEL_PREDICTIONS: HomeActions = "SET_MODEL_PREDICTIONS";
export const dispatchSetModelPredictions = ({
    modelPredictions,
}: SetModelPredictionsPayload) => ({
    type: SET_MODEL_PREDICTIONS,
    payload: {
        modelPredictions,
    },
});
