const useArtistsParams = (search: URLSearchParams) => {
  const query = search.get("q") || "";
  const page = search.get("page") ? parseInt(search.get("page") || "1", 10) : 1;

  return { query, page };
};

export default useArtistsParams;
