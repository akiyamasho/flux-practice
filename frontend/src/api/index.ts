import axios from "axios";
import { HttpMethod } from "./types";

const TIMEOUT = 10000;
const client = axios.create();

export const GET_METHOD: HttpMethod = "get";
export const POST_METHOD: HttpMethod = "post";
export const API_PROXY = "/api";

export const callApi = ({
    proxy = API_PROXY,
    method,
    url,
    headers,
    data,
}: {
    proxy?: string;
    method: HttpMethod;
    url: string;
    headers?: Object;
    data?: any;
}) => {
    const formData = new FormData();

    if (data) {
        Object.keys(data).forEach(key => {
            formData.append(key, data[key]);
        });
    }

    return new Promise((resolve, reject) => {
        // @ts-ignore
        client[method](`${proxy}${url}`, formData, {
            headers,
            timeout: TIMEOUT,
        })
            .then((result: any) => {
                resolve(result.data);
            })
            .catch((error: any) => {
                reject(error);
            });
    });
};
