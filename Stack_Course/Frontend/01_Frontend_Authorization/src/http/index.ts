import axios from "axios";

export const BASE_URL = "http://142.93.134.108:1111";

const $api = axios.create({
  baseURL: BASE_URL,
});

$api.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer ${localStorage.getItem(
    "access_token"
  )}`;
  return config;
});

$api.interceptors.response.use(
  (response) => {
    if (response.data.statusCode === 401) {
      const error = new Error("Token expired");
      throw error;
    }
    return response;
  },
  async (error) => {
    console.log("Error response", error.response);
    const originalRequest = error.config;

    if (error.response.status === 401 && !originalRequest._isRetry) {
      originalRequest._isRetry = true;
      try {
        const refreshToken = localStorage.getItem("refresh_token");
        const response = await axios.post(`${BASE_URL}/refresh`, null, {
          headers: {
            Authorization: `Bearer ${refreshToken}`,
          },
        });

        const { access_token, refresh_token: newRefreshToken } =
          response.data.body;
        localStorage.setItem("access_token", access_token);
        localStorage.setItem("refresh_token", newRefreshToken);

        return $api.request(originalRequest);
      } catch (e) {
        console.log("Не авторизован", e);
      }
    }

    throw error;
  }
);

export default $api;
