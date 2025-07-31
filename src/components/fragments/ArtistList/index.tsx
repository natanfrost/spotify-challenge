/* eslint-disable @typescript-eslint/no-explicit-any */
import Button from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";

export function ArtistList({
  artists,
  onSelect,
}: {
  artists: any[];
  onSelect: (artist: any) => void;
}) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
      {artists.map((artist) => (
        <Card
          key={artist.id}
          className="flex flex-col items-center p-4 bg-black/70 hover:scale-105 transition"
        >
          <img
            src={artist.images?.[0]?.url}
            alt={artist.name}
            className="rounded-full w-24 h-24 object-cover mb-2"
          />
          <span className="text-white font-bold">{artist.name}</span>
          <Button className="mt-2" onClick={() => onSelect(artist)}>
            Ver detalhes
          </Button>
        </Card>
      ))}
    </div>
  );
}
