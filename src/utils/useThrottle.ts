import { useCallback } from "react";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type AnyFunction = (...args: any[]) => any;

export function useThrottle() {
  const throttle = useCallback(
    <T extends AnyFunction>(func: T, delay: number = 500) => {
      let timeoutId: ReturnType<typeof setTimeout> | null = null;
      let lastArgs: Parameters<T> | null = null;

      return function throttled(...args: Parameters<T>): void {
        lastArgs = args;

        if (!timeoutId) {
          timeoutId = setTimeout(() => {
            if (lastArgs) {
              func(...lastArgs);
              lastArgs = null;
            }
            timeoutId = null;
          }, delay);
        }
      };
    },
    []
  );

  return throttle;
}

export default useThrottle;
