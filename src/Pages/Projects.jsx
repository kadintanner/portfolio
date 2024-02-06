import React from "react";
import { Link } from "react-router-dom"
import BackButton from "../Components/BackButton";
import "../Styles/projects.css";

const Projects = () => {
  return (
    <>
      {/* <BackButton /> */}

      <div id="project_container">
        <Link id="project_1" to="/Project1">
          BLOG&nbsp;WEBSITE
        </Link>
        <Link id="project_2" to="/Project2">
          MOTION&nbsp;GRAPHICS
        </Link>
        <Link id="project_3" to="/Project3">
          INTERIOR&nbsp;DESIGN
        </Link>

        <div id="preview_box">(PREVIEW)</div>
      </div>
    </>
  );
};

export default Projects;
