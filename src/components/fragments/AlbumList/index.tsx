/* eslint-disable @typescript-eslint/no-explicit-any */
import { Card } from "@/components/ui/Card";

export function AlbumList({ albums }: { albums: any[] }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
      {albums.map((album) => (
        <Card
          key={album.id}
          className="flex flex-col items-center p-4 bg-black/70"
        >
          <img
            src={album.images?.[0]?.url}
            alt={album.name}
            className="rounded-lg w-24 h-24 object-cover mb-2"
          />
          <span className="text-white font-bold text-center">{album.name}</span>
        </Card>
      ))}
    </div>
  );
}
