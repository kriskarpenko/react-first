import React from "react";

const year = new Date().getFullYear();

const Footer = ({ text }) => {
  return (
    <footer className="body">
      Copyright &copy; 2004-{year} {text}
    </footer>
  );
};

export default Footer;
