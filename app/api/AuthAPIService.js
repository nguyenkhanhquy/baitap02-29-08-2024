import AxiosClient from "./AxiosClient";

const postRequest = async (url, data, headers) => {
    try {
        const response = await AxiosClient.post(url, data, { headers });
        return response.data;
    } catch (error) {
        // Xử lý lỗi và trả về dữ liệu lỗi nếu có
        if (error.response) {
            // Nếu có phản hồi lỗi từ server
            return error.response.data; // Trả về dữ liệu lỗi từ server
        } else {
            // Nếu không có phản hồi lỗi từ server (lỗi mạng, v.v.)
            throw error;
        }
    }
};

export const loginUser = async (email, password) => {
    const data = { email, password };
    return postRequest("users/login", data);
};

export const registerUser = async (email, fullName, password) => {
    const data = { email, fullName, password };
    return postRequest("users/register", data);
};
