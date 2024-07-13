import axios from "axios";

const BASE_url = "http://localhost:5041/api/v1";

const axiosInstance = axios.create();

axiosInstance.defaults.baseURL = BASE_url;
axiosInstance.defaults.withCredentials = true;

export default axiosInstance;