import { useQuery } from "@tanstack/react-query";
import api from "..";

export function useArtists(query: string, page: number = 1) {
  return useQuery({
    queryKey: ["artists", query, page],
    queryFn: async () => {
      const { data } = await api.get("/search", {
        params: {
          q: query,
          type: "artist",
          limit: 20,
          offset: (page - 1) * 20,
        },
      });
      return data.artists;
    },
    enabled: !!query,
  });
}
