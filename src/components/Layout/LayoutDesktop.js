import Footer from "../../Footer";
import Nav from "../Nav";

const LayoutDesktop = ({ children }) => {
  return (
    <>
      <Nav type="desktop" />
      <div>{children}</div>
      <Footer type="desktop" />
    </>
  );
};

export default LayoutDesktop;
