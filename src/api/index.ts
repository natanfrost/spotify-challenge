import axios from "axios";

const api = axios.create({
  baseURL: "https://api.spotify.com/v1",
  headers: {
    Authorization: `Bearer ${import.meta.env.VITE_SPOTIFY_API_KEY}`,
  },
});

export default api;
