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
        <a className="link" href="/#preview_box">
          Projects
        </a>
        <a className="link" href="https://drive.google.com/file/d/1JdOTUU2404NAMyGAvP4fLrpOTG1tBcpc/view?usp=sharing">
          Resume
        </a>
      </div>

      {/* <button className="theme" /> */}
    </div>
  );
};

export default Navbar;
