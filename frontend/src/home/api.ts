import { callApi, GET_METHOD } from "../api";

export const callGetModelPredictions = () =>
    callApi({
        method: GET_METHOD,
        url: "/api/getModelPredictions",
    });
