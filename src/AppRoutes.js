import About from "./pages/About";
import ElasticUi from "./pages/ElasticUI";
import Main from "./pages/Main";
import NotFound from "./pages/NotFound";

const AppRoutes = ({ page }) => {
  if (page === "/about") {
    return <About />;
  }
  if (page === "/elastic") {
    return <ElasticUi />;
  }
  if (page === "/" || page === "/main") {
    return <Main />;
  }
  return <NotFound />;
};

export default AppRoutes;
