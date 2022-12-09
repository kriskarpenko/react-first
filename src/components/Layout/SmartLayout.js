import { useState, useEffect } from "react";
import LayoutDesktop from "./LayoutDesktop";
import LayoutMobile from "./LayoutMobile";

const SmartLayout = (props) => {
  const [width, setWidth] = useState(window.innerWidth);

  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
  }

  useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

  const isMobile = width <= 768;

  return isMobile ? <LayoutMobile {...props} /> : <LayoutDesktop {...props} />;
};

export default SmartLayout;
