import Axios from "axios";


const BASE_URL =
    process.env.NODE_ENV === 'production' ? '/api/' : '//localhost:3030/api/'

var axios = Axios.create({
    withCredentials: true
});

export const httpService = {
    async get(endpoint, queryParams) {
        try {
            return ajax(endpoint, "GET", null, queryParams);
        } catch (err) { }
    },
    async post(endpoint, data, otherConfig) {
        return ajax(endpoint, "POST", data, null, otherConfig);
    },
    async put(endpoint, data) {
        return ajax(endpoint, "PUT", data);
    },
    async delete(endpoint, data) {
        return ajax(endpoint, "DELETE", data);
    }
};

async function ajax(
    endpoint,
    method = "GET",
    data = null,
    params = null,
    otherConfig = {}
) {
    try {
        const tokens = _getTokens();
        console.log("sending ajax reuest: ");
        console.log(`${BASE_URL}${endpoint}`);
        console.log("query params:", params);
        // @ts-ignore
        const res = await axios({
            headers: {
                Authorization: tokens ? `Bearer ${tokens.accessToken}` : null
            },
            method,
            data,
            params,
            url: `${BASE_URL}${endpoint}`,

            ...otherConfig
        });

        return res.data;
    } catch (err) {
        console.log(
            `Had Issues ${method}ing to the backend, endpoint: ${endpoint}, with data: ${data}`
        );

        throw err;
    }
}

function _getTokens() {
    const persistStore = JSON.parse(localStorage.getItem("persist:root") || 'null');
    if (persistStore) {
        const userReducer = JSON.parse(persistStore.userReducer);
        if (!userReducer.accessToken || !userReducer.refreshToken) return null;
        return userReducer;
    }
    return null;
}
