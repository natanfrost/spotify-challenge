import { useQuery } from "@tanstack/react-query";
import api from "..";

export function useArtist(artistId: string) {
  return useQuery({
    queryKey: ["artist", artistId],
    queryFn: async () => {
      const { data } = await api.get(`/artists/${artistId}`);
      return data;
    },
    enabled: !!artistId,
  });
}
