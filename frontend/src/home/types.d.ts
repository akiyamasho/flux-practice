import { GET_MODEL_PREDICTIONS, SET_MODEL_PREDICTIONS } from "./actions";

export type HomeActions = GET_MODEL_PREDICTIONS | SET_MODEL_PREDICTIONS;

export type SetModelPredictionsPayload = {
    modelPredictions: string;
};
