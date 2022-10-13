import About from "./pages/About";
import Main from "./pages/Main";
import NotFound from "./pages/NotFound";

const AppRoutes = ({ page }) => {
  if (page === "/about") {
    return <About />;
  }
  if (page === "/" || page === "/main") {
    return <Main />;
  }
  return <NotFound />;
};

export default AppRoutes;
