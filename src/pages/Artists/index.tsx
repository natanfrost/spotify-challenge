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
  const [artists, setArtists] = useState([]);
  const [page, setPage] = useState(1);
  const debouncedQuery = useDebounce(query, 500);
  const { data, isLoading } = useArtists(debouncedQuery, page);
  console.log("isLoading:", isLoading);

  if (!artists || artists.length === 0) {
    return (
      <Layout>
        <Header />
        <h2 className="text-lg font-semibold center pt-24 text-center">
          Nenhum artista encontrado
        </h2>
      </Layout>
    );
  }

  return (
    <>
      <Layout>
        <Header />
        <ArtistList
          artists={data?.items || []}
          onSelect={(artist) => {
            console.log(artist);
          }}
        />
        <div className="flex justify-center gap-4 mt-8">
          <Button disabled={page === 1} onClick={() => setPage((p) => p - 1)}>
            Anterior
          </Button>
          <Button disabled={!data?.next} onClick={() => setPage((p) => p + 1)}>
            Próxima
          </Button>
        </div>
      </Layout>
    </>
  );
};

export default ArtistsPage;
