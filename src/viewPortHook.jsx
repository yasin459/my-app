import { useEffect, useMemo, useState } from "react";
export function useIsInViewport() {
  const [isIntersecting, setIsIntersecting] = useState(
    new Array(50).fill(false)
  );

  const observer = useMemo(
    () =>
      new IntersectionObserver(([entry]) => {
        console.log(
          "IntersectionObserver",
          entry,
          entry.target.id,
          entry.isIntersecting,
          entry.intersectionRatio
        );
        setIsIntersecting((state) => {
          let newList = Object.assign([], state);
          newList[parseInt(entry.target.id) - 1] = entry.isIntersecting;
          return newList;
        });
      }),
    []
  );

  useEffect(() => {
    for (let i = 0; i < 50; i++) {
      console.log(`element ${i + 1}`, document.getElementById(`${i + 1}`));
      observer.observe(document.getElementById(`${i + 1}`));
    }

    return () => {
      observer.disconnect();
    };
  }, [observer]);

  return isIntersecting;
}
