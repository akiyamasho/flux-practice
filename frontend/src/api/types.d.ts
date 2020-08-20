import { SET_REQUEST_LOADING, SET_REQUEST_ERROR } from "./actions";

export type ApiActions = SET_REQUEST_LOADING | SET_REQUEST_ERROR;
export type HttpMethod = "get" | "post";

export interface SetRequestLoadingPayload {
    actionType: ApiActions;
    isLoading?: boolean;
    errorLabelId?: never;
}

export interface SetRequestErrorPayload {
    actionType: ApiActions;
    errorLabelId?: string;
    isLoading?: never;
}
