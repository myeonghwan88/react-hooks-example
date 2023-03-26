import { useState, useEffect } from "react";

export default function useWindowWidth() {
  const [width, seWidth] = useState(window.innerWidth);

  useEffect(() => {
    const resize = () => {
      seWidth(window.innerWidth);
    };
    window.addEventListener("resize", resize);

    return () => {
      window.removeEventListener("resize", resize);
    };
  }, []);

  return width;
}
