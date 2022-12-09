import { useEffect, useState } from "react";
import AppRoutes from "./AppRoutes";
import Layout from "./components/Layout";

function App() {
  const [page, setPage] = useState("/");

  useEffect(() => {
    let newPage = window.location.pathname;
    setPage(newPage);
    console.log(newPage);
  }, []);

  return (
    <Layout>
      <AppRoutes page={page} />
    </Layout>
  );
}

export default App;
