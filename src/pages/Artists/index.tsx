import { useArtists } from "@/api/hooks/useArtists";
import { ArtistList } from "@/components/fragments/ArtistList";
import Header from "@/components/fragments/Header";
import Layout from "@/components/ui/Layout";
import { useDebounce } from "@/utils/useDebounce";
import { useState } from "react";

const ArtistsPage = () => {
  console.log("ArtistsPage rendered");
  const [query, setQuery] = useState("");
  console.log("Current query:", query);
  const debouncedQuery = useDebounce(query, 500);
  console.log("Debounced query:", debouncedQuery);

  const { artists, isLoading } = useArtists(debouncedQuery);

  const handleSearchChange = (value: string) => {
    setQuery(value);
  };

  return (
    <>
      <Header onSearchChange={handleSearchChange} />
      <Layout>
        <ArtistList
          showSkeleton={isLoading}
          artists={artists || []}
          onSelect={(artist) => {
            console.log(artist);
          }}
        />
      </Layout>
    </>
  );
};

export default ArtistsPage;
