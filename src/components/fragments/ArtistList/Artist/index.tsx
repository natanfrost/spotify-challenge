/* eslint-disable @typescript-eslint/no-explicit-any */
import { Card, CardContent, CardFooter } from "@/components/ui/Card";
import Typography from "@/components/ui/Typography";
import { memo } from "react";
import { useNavigate } from "react-router";

type ArtistProps = {
  artist: {
    id: string;
    name: string;
    images?: { url: string }[];
  };
};

const Artist = memo(({ artist }: ArtistProps) => {
  const navigate = useNavigate();

  const handleSelectedArtist = (artist: any) => {
    navigate(`/artists/${artist.id}`);
  };

  return (
    <Card
      key={artist.id}
      backgroundImage={artist.images?.[0]?.url}
      onClick={() => handleSelectedArtist(artist)}
    >
      <CardContent>
        <Typography className="text-accent text-shadow-accent " variant="h2">
          {artist.name}
        </Typography>
      </CardContent>
      <CardFooter>
        <Typography className="text-sm text-gray-300 hover:text-muted">
          Ver mais detalhes
        </Typography>
      </CardFooter>
    </Card>
  );
});

export default Artist;
