import { useArtists } from "@/api/hooks/useArtists";
import { ArtistList } from "@/components/fragments/ArtistList";
import { FilterBar } from "@/components/fragments/FilterBar";
import Button from "@/components/ui/Button";
import { useState } from "react";

export default function ArtistsPage() {
  console.log("ArtistsPage rendered");
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const { data, isLoading } = useArtists(query, page);

  return (
    <div className="p-8">
      <FilterBar
        value={query}
        onChange={setQuery}
        placeholder="Filtrar por nome do artista..."
      />
      {isLoading ? (
        <div>Carregando...</div>
      ) : (
        <>
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
            <Button
              disabled={!data?.next}
              onClick={() => setPage((p) => p + 1)}
            >
              Próxima
            </Button>
          </div>
        </>
      )}
    </div>
  );
}
