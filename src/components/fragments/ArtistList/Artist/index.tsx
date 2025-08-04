import { Card, CardContent, CardFooter } from "@/components/ui/Card";
import Typography from "@/components/ui/Typography";
import { memo } from "react";

type ArtistProps = {
  artist: {
    id: string;
    name: string;
    images?: { url: string }[];
  };
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onSelect: (artist: any) => void;
};

const Artist = memo(({ artist, onSelect }: ArtistProps) => {
  return (
    <Card key={artist.id} backgroundImage={artist.images?.[0]?.url}>
      <CardContent>
        <Typography className="text-accent text-shadow-accent " variant="h2">
          {artist.name}
        </Typography>
      </CardContent>
      <CardFooter onClick={() => onSelect(artist)}>
        <Typography className="text-sm text-gray-300 hover:text-muted">
          Ver mais detalhes
        </Typography>
      </CardFooter>
    </Card>
  );
});

export default Artist;
