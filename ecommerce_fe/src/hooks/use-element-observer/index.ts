import { useCallback, useEffect, useRef } from 'react';
import { ResizeObserver as Polyfill } from '@juggle/resize-observer';
import debounce from '@/app/utils/debounce';

const ResizeObserver = window.ResizeObserver || Polyfill;

export function useElementHeightObserver(
  domElement: HTMLElement,
  onChange: (height: number) => void,
  debounceTime = 100
): void {
  const observerRef = useRef<ResizeObserver | null>(null);

  const heightRef = useRef<number | undefined>(domElement?.offsetHeight || 0);

  const handleElementResize = useCallback(
    (entries:any) => {
      const elementOffsetHeight = entries[0].target.offsetHeight;

      if (elementOffsetHeight !== heightRef.current) {
        heightRef.current = elementOffsetHeight;
        onChange(elementOffsetHeight);
      }
    },
    [onChange]
  );

  useEffect(() => {
    if (observerRef.current) {
      observerRef.current.disconnect();
    } else {
      observerRef.current = new ResizeObserver(debounce(handleElementResize, debounceTime));
    }

    if (domElement) {
      observerRef.current.observe(domElement);
    }

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [domElement]);
}
