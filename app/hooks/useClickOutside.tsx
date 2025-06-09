import { useEffect } from 'react';

export const useClickOutside = (
  ref: React.RefObject<HTMLElement | null>,
  handler: () => void,
  triggerId: string
) => {
  useEffect(() => {
    const listener = (event: MouseEvent | TouchEvent) => {
        const target = event.target as HTMLElement | null;

        const clickedInsideRef = ref?.current?.contains(target);
        const clickedInsideTrigger = triggerId ? target?.closest(`#${triggerId}`) : true;
        if (clickedInsideRef || clickedInsideTrigger) {
            return;
        }
      handler();
    };

    document.addEventListener('mousedown', listener);
    document.addEventListener('touchstart', listener);

    return () => {
      document.removeEventListener('mousedown', listener);
      document.removeEventListener('touchstart', listener);
    };
  }, [ref, handler]);
};