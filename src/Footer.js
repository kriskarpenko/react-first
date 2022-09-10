import React from "react";

const Footer = ({ text }) => {
  const year = new Date().getFullYear();
  return (
    <footer className="body">
      Copyright &copy; 2004-{year} {text}
    </footer>
  );
};

export default Footer;
