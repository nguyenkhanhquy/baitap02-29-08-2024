import AxiosClient from "./AxiosClient";
import { LOGIN_ENDPOINT, REGISTER_ENDPOINT } from "./Endpoints";

export const registerUser = async (userName, password) => {
    try {
        const data = { userName, password };
        const response = await AxiosClient.post(REGISTER_ENDPOINT, data);
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const loginUser = async (userName, password) => {
    try {
        const data = { userName, password };
        const response = await AxiosClient.post(LOGIN_ENDPOINT, data, {
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
            },
        });
        return response.data;
    } catch (error) {
        throw error;
    }
};
