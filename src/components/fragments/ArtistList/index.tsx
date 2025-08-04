/* eslint-disable @typescript-eslint/no-explicit-any */
import Typography from "@/components/ui/Typography";
import { Music } from "lucide-react";
import Skeleton from "./Skeleton";
import Artist from "./Artist";

type ArtistListProps = {
  artists: any[];
  showSkeleton?: boolean;
  isLoadingMore?: boolean;
};

export function ArtistList({
  artists,
  showSkeleton,
  isLoadingMore,
}: ArtistListProps) {
  if (showSkeleton) {
    return (
      <Skeleton className="h-[400px] bg-gradient-to-r from-gray-300 to-gray-200" />
    );
  }

  if (!artists || artists.length === 0) {
    return (
      <div className="flex h-full justify-center items-center flex-col gap-16 px-8 text-center">
        <Typography variant="h2" className="text-gray-700">
          Procure por seu artista favorito
        </Typography>
        <Music size={192} className="text-gray-700" />
      </div>
    );
  }

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 md:mx-5">
        {artists.map((artist) => (
          <Artist key={artist.id} artist={artist} />
        ))}
      </div>
      {isLoadingMore && (
        <Skeleton className="mt-8 h-[400px] bg-gradient-to-r from-gray-300 to-gray-200" />
      )}
    </>
  );
}
