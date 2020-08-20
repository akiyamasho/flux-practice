import { HomeActions, SetModelPredictionsPayload } from "./types";
import { SET_MODEL_PREDICTIONS } from "./actions";

const homeReducer = (
    state: { modelPredictions: string } = { modelPredictions: "" },
    {
        type,
        payload,
    }: {
        type: HomeActions;
        payload: SetModelPredictionsPayload;
    }
) => {
    switch (type) {
        case SET_MODEL_PREDICTIONS:
            return {
                ...state,
                modelPredictions: payload.modelPredictions,
            };

        default:
            return state;
    }
};

export default homeReducer;
