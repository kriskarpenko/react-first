import "./App.css";
import Nav from "./components/Nav";
import Footer from "./Footer";
import { useEffect, useState } from "react";
import AppRoutes from "./AppRoutes";

function App() {
  const [page, setPage] = useState("/");

  useEffect(() => {
    let newPage = window.location.pathname;
    setPage(newPage);
    console.log(newPage);
  }, []);

  return (
    <div className="App">
      <Nav page={page} />
      <AppRoutes page={page} />
      <Footer text="Kristina" />
    </div>
  );
}

export default App;
