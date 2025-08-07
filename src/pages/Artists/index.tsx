/* eslint-disable @typescript-eslint/no-explicit-any */
import { useArtists } from "@/api/hooks/useArtists";
import { ArtistList } from "@/components/fragments/ArtistList";
import Header from "@/components/fragments/Header";
import Layout from "@/components/ui/Layout";
import useArtistsParams from "@/utils/useArtistParams";
import { useDebounce } from "@/utils/useDebounce";
import useInfiniteScroll from "@/utils/useInfiniteScroll";
import { useCallback, useEffect, useRef, useState } from "react";
import { createSearchParams, useSearchParams } from "react-router";

const DEFAULT_PAGE = "1";

const ArtistsPage = () => {
  const [allArtists, setAllArtists] = useState<any[]>([]);
  const [isLoadingMore, setIsLoadingMore] = useState(false);
  const isZeroOffset = useRef(true);
  const [search, setSearch] = useSearchParams();
  const { query, page } = useArtistsParams(search);
  const debounce = useDebounce();

  const { artists, isLoading } = useArtists(query, page, isZeroOffset.current);

  const handleSearchChange = (value: string) => {
    isZeroOffset.current = false;
    setSearch(
      createSearchParams({
        q: value,
        page: DEFAULT_PAGE,
      })
    );
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleDebouncedSearchChange = debounce(handleSearchChange);

  const handlePageChange = useCallback(
    (page: number) => {
      isZeroOffset.current = false;
      setSearch(
        createSearchParams({
          q: query,
          page: page.toString(),
        })
      );
    },
    [query, setSearch]
  );

  const handleNextPage = useCallback(() => {
    setIsLoadingMore(true);
    handlePageChange(page + 1);
  }, [handlePageChange, page]);

  useInfiniteScroll(handleNextPage, isLoadingMore);

  useEffect(() => {
    if (page === 1) {
      setAllArtists(artists?.items || []);
      return;
    }
    if (artists?.items) {
      setAllArtists((prev) => [...prev, ...artists.items]);
      setIsLoadingMore(false);
    }
  }, [artists, page]);

  useEffect(() => {
    isZeroOffset.current = false;
    return () => {
      isZeroOffset.current = true;
    };
  }, []);

  return (
    <>
      <Header onSearchChange={handleDebouncedSearchChange} />
      <Layout>
        <ArtistList
          showSkeleton={isLoading && page === 1}
          isLoadingMore={isLoadingMore}
          artists={allArtists || []}
        />
      </Layout>
    </>
  );
};

export default ArtistsPage;
