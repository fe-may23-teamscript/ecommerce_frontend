import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useSearchWith } from 'shared/hooks/useSearchWith';

export default function useDebounce(value: string, delay: number) {
  const [debouncedValue, setDebouncedValue] = useState(value);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
      if (!value) {
        setSearchParams(useSearchWith(searchParams, { searchQuery: null }));
      } else {
        setSearchParams(useSearchWith(searchParams, { searchQuery: value }));
      }
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value]);

  return debouncedValue;
}
