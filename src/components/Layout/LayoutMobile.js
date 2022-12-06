import Nav from "../Nav";

const LayoutMobile = ({ children }) => {
  return (
    <>
      <Nav type="mobile" />
      <div>{children}</div>
    </>
  );
};

export default LayoutMobile;
