import { useState, useEffect } from "react";

export function useDebounce(values: string, delay = 1000): string {
  const [debouncedValues, setDebouncedValues] = useState(values);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValues(values);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [values, delay]);

  return debouncedValues;
}
