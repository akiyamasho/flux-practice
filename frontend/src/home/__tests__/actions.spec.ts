import {
    dispatchGetModelPredictions,
    dispatchSetModelPredictions,
    SET_MODEL_PREDICTIONS,
} from "../actions";

describe("HomeActions", () => {
    it(`should return action with type ${SET_MODEL_PREDICTIONS} and payload with passed "modelPredictions"`, function() {
        const modelPredictions = JSON.stringify({ a: 1 });

        expect(dispatchSetModelPredictions({ modelPredictions })).toEqual({
            type: SET_MODEL_PREDICTIONS,
            payload: {
                modelPredictions,
            },
        });
    });
});
