/* eslint-disable @typescript-eslint/no-explicit-any */
import { Card, CardContent, CardFooter } from "@/components/ui/Card";
import Typography from "@/components/ui/Typography";
import { Music } from "lucide-react";

type ArtistListProps = {
  artists: any[];
  onSelect: (artist: any) => void;
};

export function ArtistList({ artists, onSelect }: ArtistListProps) {
  console.log("ArtistList rendered with artists:", artists);

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
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 md:mx-5">
      {artists.map((artist) => (
        <Card
          key={artist.id}
          backgroundImage={artist.images?.[0]?.url}
          className="  "
        >
          <CardContent>
            <Typography
              className="text-accent text-shadow-accent "
              variant="h2"
            >
              {artist.name}
            </Typography>
          </CardContent>
          <CardFooter onClick={() => onSelect(artist)}>
            <Typography className="text-sm text-gray-300 hover:text-muted">
              Ver mais detalhes
            </Typography>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
