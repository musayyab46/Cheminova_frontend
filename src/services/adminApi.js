import axios from "axios";

const adminApi = axios.create({
  baseURL: "https://cheminova-ai-backend.onrender.com",
});

// Attach token automatically
adminApi.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

adminApi.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response) {
      const status = error.response.status;

      // 401 = Unauthorized (invalid/expired token)
      if (status === 401 || status === 403) {
        console.warn("Token expired. Redirecting to login...");

        // clear stored auth data
        localStorage.removeItem("token");
        localStorage.removeItem("user");

        // redirect to login page
        window.location.href = "/login";
      }
    }

    return Promise.reject(error);
  }
);

export default adminApi;