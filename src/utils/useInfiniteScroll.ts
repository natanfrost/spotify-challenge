import { useCallback, useEffect } from "react";
import useThrottle from "./useThrottle";

const useInfiniteScroll = (callback: () => void, isLoadingMore: boolean) => {
  const throttle = useThrottle();

  const checkScroll = useCallback(() => {
    const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
    const isAtBottom = scrollTop + clientHeight >= scrollHeight - 50;

    if (isAtBottom && !isLoadingMore) {
      callback();
    }
  }, [callback, isLoadingMore]);

  const throttledCheckScroll = throttle(checkScroll);

  useEffect(() => {
    window.addEventListener("scroll", throttledCheckScroll);
    window.addEventListener("resize", throttledCheckScroll);

    throttledCheckScroll();

    return () => {
      window.removeEventListener("scroll", throttledCheckScroll);
      window.removeEventListener("resize", throttledCheckScroll);
    };
  }, [throttledCheckScroll]);
};

export default useInfiniteScroll;
