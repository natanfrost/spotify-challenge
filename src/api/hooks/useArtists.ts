import { useQuery } from "@tanstack/react-query";
import api from "..";

const DEFAULT_LIMIT = 8;
const API_LIMIT = 50;

export function useArtists(
  query: string,
  page: number = 1,
  isZeroOffset: boolean = false
) {
  const fullLimit =
    DEFAULT_LIMIT * page > API_LIMIT ? API_LIMIT : DEFAULT_LIMIT * page;
  const limit = isZeroOffset ? fullLimit : DEFAULT_LIMIT;
  const offset = isZeroOffset ? 0 : (page - 1) * DEFAULT_LIMIT;

  const { data, isLoading } = useQuery({
    queryKey: ["artists", query, page, isZeroOffset],
    queryFn: async () => {
      const { data } = await api.get("/search", {
        params: {
          q: query,
          type: "artist",
          limit: limit,
          offset: offset,
        },
      });
      return data.artists;
    },
    enabled: !!query,
    networkMode: "always",
    staleTime: "static",
  });
  return { artists: data, isLoading };
}
