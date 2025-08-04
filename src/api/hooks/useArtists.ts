import { useQuery } from "@tanstack/react-query";
import api from "..";

const DEFAULT_LIMIT = 8;

export function useArtists(query: string, page: number = 1) {
  const { data, isLoading } = useQuery({
    queryKey: ["artists", query, page],
    queryFn: async () => {
      const { data } = await api.get("/search", {
        params: {
          q: query,
          type: "artist",
          limit: DEFAULT_LIMIT,
          offset: (page - 1) * DEFAULT_LIMIT,
        },
      });
      return data.artists;
    },
    enabled: !!query,
  });
  return { artists: data, isLoading };
}
