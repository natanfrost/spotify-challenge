import axios from "axios";
import { useMutation } from "@tanstack/react-query";
import { useCallback } from "react";
import { useNavigate } from "react-router";

const clientId = import.meta.env.VITE_SPOTIFY_CLIENT_ID;
const clientSecret = import.meta.env.VITE_SPOTIFY_CLIENT_SECRET;

export function useSpotifyAuth() {
  const navigate = useNavigate();

  const getToken = useCallback(async () => {
    const params = new URLSearchParams();
    params.append("grant_type", "client_credentials");
    params.append("client_id", clientId);
    params.append("client_secret", clientSecret);

    const { data } = await axios.post(
      "https://accounts.spotify.com/api/token",
      params,
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    );
    localStorage.setItem("spotify_token", data.access_token);
    return data;
  }, []);

  const login = useCallback(async () => {
    await getToken();
  }, [getToken]);

  const { mutate } = useMutation({
    mutationFn: login,
    onError: () => console.log("error"),
    onSuccess: () => {
      navigate("/artists");
    },
  });

  return { login: mutate };
}
