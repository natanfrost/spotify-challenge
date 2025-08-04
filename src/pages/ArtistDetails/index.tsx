import { useArtist } from "@/api/hooks/useArtist";
import { useParams } from "react-router";
import ArtistDetails from "@/components/fragments/ArtistDetails";
import Layout from "@/components/ui/Layout";

const ArtistDetailsPage = () => {
  const { id } = useParams<{ id: string }>();
  const { artist, isLoading } = useArtist(id || "");
  if (isLoading) {
    return <div>Loading...</div>;
  }
  return (
    <Layout>
      <ArtistDetails artist={artist} />
    </Layout>
  );
};

export default ArtistDetailsPage;
