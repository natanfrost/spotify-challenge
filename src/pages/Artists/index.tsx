import { useArtists } from "@/api/hooks/useArtists";
import { ArtistList } from "@/components/fragments/ArtistList";
import Header from "@/components/fragments/Header";
import Button from "@/components/ui/Button";
import Layout from "@/components/ui/Layout";
import { useDebounce } from "@/utils/useDebounce";
import { useState } from "react";

const ArtistsPage = () => {
  console.log("ArtistsPage rendered");
  const [query, setQuery] = useState("");
  console.log("Current query:", query);
  const [page, setPage] = useState(1);
  const debouncedQuery = useDebounce(query, 500);
  console.log("Debounced query:", debouncedQuery, "Page:", page);

  const { artists, isLoading } = useArtists(debouncedQuery, page);

  const handleSearchChange = (value: string) => {
    console.log("Search input changed:", value);
    setQuery(value);
  };

  return (
    <>
      <Header onSearchChange={handleSearchChange} />
      <Layout>
        <ArtistList
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
