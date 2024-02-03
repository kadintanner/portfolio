import React from "react";
import "../Styles/navbar.css";

const Navbar = () => {
  return (
    <div id="navbar">
      
      <a id="name" href="/">
        KADIN TANNER
      </a>

      <a className="link" href="/About">
        About
      </a>
      <a className="link" href="/Projects">
        Projects
      </a>
      <a className="link" href="/Contact">
        Contact
      </a>

      {/* <button className="theme" /> */}
   
    </div>
  );
};

export default Navbar;
