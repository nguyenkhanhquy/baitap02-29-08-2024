import axios from "axios";

// Thiết lập base URL cho tất cả các yêu cầu API
const AxiosClient = axios.create({
    baseURL: "https://api.21110282.codes/api/v1/",
    headers: {
        "Content-Type": "application/json",
    },
});

export default AxiosClient;
