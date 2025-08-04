/* eslint-disable @typescript-eslint/no-explicit-any */
import { useArtists } from "@/api/hooks/useArtists";
import { ArtistList } from "@/components/fragments/ArtistList";
import Header from "@/components/fragments/Header";
import Layout from "@/components/ui/Layout";
import useArtistsParams from "@/utils/useArtistParams";
import { useDebounce } from "@/utils/useDebounce";
import useThrottle from "@/utils/useThrottle";
import { useCallback, useEffect, useState } from "react";
import { createSearchParams, useSearchParams } from "react-router";

const DEFAULT_PAGE = "1";

const ArtistsPage = () => {
  const [allArtists, setAllArtists] = useState<any[]>([]);
  const [isLoadingMore, setIsLoadingMore] = useState(false);

  const [search, setSearch] = useSearchParams();
  const { query, page } = useArtistsParams(search);
  const debounce = useDebounce();
  const throttle = useThrottle();

  const { artists, isLoading } = useArtists(query, page);

  const handleSearchChange = (value: string) => {
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

  const checkScroll = useCallback(() => {
    const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
    const isAtBottom = scrollTop + clientHeight >= scrollHeight - 50;

    if (isAtBottom && !isLoading && !isLoadingMore) {
      handleNextPage();
    }
  }, [handleNextPage, isLoading, isLoadingMore]);

  const throttledCheckScroll = throttle(checkScroll, 400);

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
    window.addEventListener("scroll", throttledCheckScroll);
    window.addEventListener("resize", throttledCheckScroll);

    throttledCheckScroll();

    return () => {
      window.removeEventListener("scroll", throttledCheckScroll);
      window.removeEventListener("resize", throttledCheckScroll);
    };
  }, [throttledCheckScroll]);

  return (
    <>
      <Header onSearchChange={handleDebouncedSearchChange} />
      <Layout>
        <ArtistList
          showSkeleton={isLoading && page === 1}
          isLoadingMore={isLoadingMore}
          artists={allArtists || []}
          onSelect={(artist) => {
            console.log(artist);
          }}
        />
      </Layout>
    </>
  );
};

export default ArtistsPage;
