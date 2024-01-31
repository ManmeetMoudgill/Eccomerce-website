import { useEffect, useState } from 'react';

interface UseInViewportOptions {
  threshold?: number; // Percentage of the element's visibility needed to trigger the callback
}

const useInViewport = (
  ref: React.RefObject<HTMLElement>,
  options: UseInViewportOptions = { threshold: 0 },
): boolean => {
  const [isInViewport, setIsInViewport] = useState<boolean>(false);

  const checkIfInViewport = () => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      const windowHeight = window.innerHeight || document.documentElement.clientHeight;
      const threshold = options.threshold || 0;

      const isVisible =
        rect.top <= windowHeight * (1 - threshold) &&
        rect.bottom >= 0 &&
        rect.left <= window.innerWidth &&
        rect.right >= 0;

      setIsInViewport(isVisible);
    }
  };

  useEffect(() => {
    const scrollHandler = () => {
      checkIfInViewport();
    };

    const resizeHandler = () => {
      checkIfInViewport();
    };

    checkIfInViewport(); // Check initially

    window.addEventListener('scroll', scrollHandler);
    window.addEventListener('resize', resizeHandler);

    return () => {
      window.removeEventListener('scroll', scrollHandler);
      window.removeEventListener('resize', resizeHandler);
    };
  }, [ref, options.threshold]);

  return isInViewport;
};

export default useInViewport;
