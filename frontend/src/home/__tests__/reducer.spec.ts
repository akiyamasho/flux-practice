import homeReducer from "../reducer";
import { SET_MODEL_PREDICTIONS } from "../actions";

describe("API Request Status Reducer", () => {
    it(`should return initial state when passing unsupported action initially`, function() {
        expect(
            homeReducer(undefined, {
                type: "unsupported",
                payload: {
                    actionType: "someAction",
                    isLoading: true,
                },
            })
        ).toEqual({ modelPredictions: "" });
    });

    it(`should return state with model predictions set when setting ${SET_MODEL_PREDICTIONS} with passed data`, function() {
        const modelPredictions = JSON.stringify({ a: 1 });
        expect(
            homeReducer(undefined, {
                type: SET_MODEL_PREDICTIONS,
                payload: {
                    modelPredictions,
                },
            })
        ).toEqual({
            modelPredictions,
        });
    });
});
