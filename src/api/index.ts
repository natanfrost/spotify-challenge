import axios from "axios";

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

const api = axios.create({
  baseURL: "https://api.spotify.com/v1",
});

api.interceptors.request.use(async (config) => {
  await delay(1000);

  const token = localStorage.getItem("spotify_token");
  if (token) {
    config.headers["Authorization"] = `Bearer ${token}`;
  } else {
    console.warn("No token found, request will not be authenticated.");
  }
  return config;
});

export default api;
