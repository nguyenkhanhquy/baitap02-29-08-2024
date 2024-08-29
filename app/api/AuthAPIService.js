import AxiosClient from "./AxiosClient";

const postRequest = async (url, data, headers) => {
    try {
        const response = await AxiosClient.post(url, data, { headers });
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const loginUser = async (userName, password) => {
    const data = new URLSearchParams({ userName, password }).toString();
    return postRequest("users/login", data, {
        "Content-Type": "application/x-www-form-urlencoded",
    });
};

export const registerUser = async (userName, fullName, email, phone, password) => {
    const data = { userName, fullName, email, phone, password };
    return postRequest("users/register", data);
};
