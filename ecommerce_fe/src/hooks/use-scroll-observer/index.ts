import { useCallback, useEffect, useRef, useState } from 'react';
import debounce from '@/app/utils/debounce';

export function useScrollHeightObserver(
  targetHeight: number,
  debounceTime = 100
): boolean {
  const lastScrollYRef = useRef<number>(0);
  const [isHeightReached, setIsHeightReached] = useState<boolean>(false);

  const handleScroll = useCallback(() => {
    const currentScrollY = window.scrollY;


    if (currentScrollY !== lastScrollYRef.current) {
      lastScrollYRef.current = currentScrollY;

      if (currentScrollY >= targetHeight) {
        if (!isHeightReached) {
          setIsHeightReached(true);
        }
      }else{
        setIsHeightReached(false);
      }
    }
  }, [targetHeight, isHeightReached]);

  useEffect(() => {
    const debouncedScrollHandler = debounce(handleScroll, debounceTime);

    window.addEventListener('scroll', debouncedScrollHandler, { passive: true });

    return () => {
      window.removeEventListener('scroll', debouncedScrollHandler);
    };
  }, [handleScroll, debounceTime]);

  return isHeightReached;
}