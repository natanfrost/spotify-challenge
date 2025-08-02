import tokenWorkerService from "@/workers/tokenWokerService";
import axios from "axios";

const getTokenFromWorker = (): Promise<string | null> => {
  return new Promise((resolve) => {
    tokenWorkerService.onmessage = (event) => {
      if (event.data.action === "token") {
        resolve(event.data.token);
      } else {
        resolve(null);
      }
    };
    tokenWorkerService.postMessage({ action: "getToken" });
  });
};

const api = axios.create({
  baseURL: "https://api.spotify.com/v1",
});

api.interceptors.request.use(async (config) => {
  const token = await getTokenFromWorker();
  if (token) {
    config.headers["Authorization"] = `Bearer ${token}`;
  }
  return config;
});

export default api;
