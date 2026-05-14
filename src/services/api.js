import axios from "axios";

// 🔗 Create Axios Instance
const API = axios.create({
  baseURL: "https://cheminova-ai-backend.onrender.com/", // 🔁 replace with your deployed backend
  withCredentials: true, // only needed if using cookies
});

// 🔐 Attach JWT Token Automatically
API.interceptors.request.use(
  (req) => {
    const token = localStorage.getItem("token");

    if (token) {
      req.headers.Authorization = `Bearer ${token}`;
    }

    return req;
  },
  (error) => Promise.reject(error)
);

// ⚠️ Global Response Handling
API.interceptors.response.use(
  (response) => response,
  (error) => {
    // Handle unauthorized (token expired / invalid)
    if (error.response && error.response.status === 403) {
      console.warn("Session expired. Please login again.");

      // clear token
      localStorage.removeItem("token");

      // redirect to login
      window.location.href = "/login";
    }

    return Promise.reject(error);
  }
);

export default API;