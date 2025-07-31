/* eslint-disable @typescript-eslint/no-explicit-any */
import { useQuery } from "@tanstack/react-query";
import api from "..";

export function useAlbums(artistId: string, query: string, page: number = 1) {
  return useQuery({
    queryKey: ["albums", artistId, query, page],
    queryFn: async () => {
      const { data } = await api.get(`/artists/${artistId}/albums`, {
        params: {
          limit: 20,
          offset: (page - 1) * 20,
          include_groups: "album,single",
        },
      });
      const filtered = query
        ? data.items.filter((album: any) =>
            album.name.toLowerCase().includes(query.toLowerCase())
          )
        : data.items;
      return { ...data, items: filtered };
    },
    enabled: !!artistId,
  });
}
