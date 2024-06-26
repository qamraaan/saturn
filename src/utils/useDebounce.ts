/* eslint-disable react-hooks/exhaustive-deps */
import {useCallback, useEffect} from 'react';
/**
 * @param { (...args: any[]) => any } fn
 * @param { number } delay
 * @param { any[] } deps
 *
 */
export const useDebounce = (
  fn: (...args: any[]) => any,
  delay: number,
  deps: any[],
) => {
  const callback = useCallback(fn, deps);
  useEffect(() => {
    const handler = setTimeout(() => {
      callback();
    }, delay);
    return () => {
      clearTimeout(handler);
    };
  }, [callback]);
};
