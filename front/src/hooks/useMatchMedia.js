import { useLayoutEffect, useState } from "react";
const queries = [
  "(max-width:766px)",
  "(min-width:768px) and (max-width:1199px)",
  "(min-width:1200px)",
];

export function useMatchMedia() {
  const mediaQuaryLists = queries.map((query) => matchMedia(query));

  const getValue = () => mediaQuaryLists.map((mql) => mql.matches);

  const [value, setValue] = useState(getValue);
  useLayoutEffect(() => {
    const handler = () => setValue(getValue);
    mediaQuaryLists.forEach((mql) => mql.addEventListener("change", handler));
  }, []);
  return ["isMobile", "isTablet", "isDesktop"].reduce(
    (acc, screen, index) => ({
      ...acc,
      [screen]: value[index],
    }),
    {}
  );
}
