import apiRequestStatusReducer from "../reducer";
import { SET_REQUEST_ERROR, SET_REQUEST_LOADING } from "../actions";

describe("API Request Status Reducer", () => {
    const actionName = "someAction";
    const errorId = "error.id";

    it(`should return initial state when passing unsupported action initially`, function() {
        expect(
            apiRequestStatusReducer(undefined, {
                type: "unsupported",
                payload: {
                    actionType: "someAction",
                    isLoading: true,
                },
            })
        ).toEqual({ loading: {}, error: {} });
    });

    it(`should return state with loading set to true and error set to null when setting ${SET_REQUEST_LOADING} for an action`, function() {
        expect(
            apiRequestStatusReducer(undefined, {
                type: SET_REQUEST_LOADING,
                payload: {
                    actionType: actionName,
                    isLoading: true,
                },
            })
        ).toEqual({
            loading: {
                [actionName]: true,
            },
            error: {
                [actionName]: null,
            },
        });
    });

    it(`should return state with loading set to false and error intact when setting ${SET_REQUEST_LOADING} for an action`, function() {
        expect(
            apiRequestStatusReducer(undefined, {
                type: SET_REQUEST_LOADING,
                payload: {
                    actionType: actionName,
                    isLoading: false,
                },
            })
        ).toEqual({
            loading: {
                [actionName]: false,
            },
            error: {},
        });
    });

    it(`should return state with loading intact and error set to label ID when setting ${SET_REQUEST_ERROR} for an action`, function() {
        expect(
            apiRequestStatusReducer(undefined, {
                type: SET_REQUEST_ERROR,
                payload: {
                    actionType: actionName,
                    errorLabelId: errorId,
                },
            })
        ).toEqual({
            loading: {},
            error: {
                [actionName]: errorId,
            },
        });
    });
});
