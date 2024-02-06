import React from "react";
import "../Styles/navbar.css";

const Navbar = () => {
  return (
    <div id="navbar">
      <a id="name" href="/">
        KADIN&nbsp;TANNER
      </a>

      {/* <div id="navbar_spacer" /> */}

      <div id="link_container">
        <a className="link" href="/About">
          About
        </a>
        <a className="link" href="/Projects">
          Projects
        </a>
        <a className="link" href="/Contact">
          Resume
        </a>
      </div>

      {/* <button className="theme" /> */}
    </div>
  );
};

export default Navbar;
