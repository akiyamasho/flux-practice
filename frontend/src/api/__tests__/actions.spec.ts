import {
    dispatchSetRequestLoading,
    dispatchSetRequestError,
    SET_REQUEST_LOADING,
    SET_REQUEST_ERROR,
} from "../actions";

describe("API Actions", () => {
    it(`should return action with type ${SET_REQUEST_LOADING} and payload with passed "actionType" and "isLoading"`, function() {
        const actionType = "someAction";
        const isLoading = true;

        expect(dispatchSetRequestLoading({ actionType, isLoading })).toEqual({
            type: SET_REQUEST_LOADING,
            payload: {
                actionType,
                isLoading,
            },
        });
    });

    it(`should return action with type ${SET_REQUEST_ERROR} and payload with passed "actionType" and "errorLabelId"`, function() {
        const actionType = "someOtherAction";
        const errorLabelId = "errorLabelId";

        expect(dispatchSetRequestError({ actionType, errorLabelId })).toEqual({
            type: SET_REQUEST_ERROR,
            payload: {
                actionType,
                errorLabelId,
            },
        });
    });
});
