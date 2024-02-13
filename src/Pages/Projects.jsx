import React from "react";
import { Link } from "react-router-dom"
import BackButton from "../Components/BackButton";
import Project1 from "./Projects/Project1";
import Project2 from "./Projects/Project2";
import Project3 from "./Projects/Project3";
import "../Styles/projects.css";

const Projects = () => {
  return (
    <>

    <div id="page_container">

      <div id="project_container">
        <Link id="project_1">
          FIRST&nbsp;WEBSITE
        </Link>
        <Link id="project_2">
          DESIGN&nbsp;TWO
        </Link>
        <Link id="project_3">
          PROJECT&nbsp;THREE
        </Link>
        
        <div id="preview_box">(PREVIEW)</div>

        <div id="hidden_div1">
          <Project1 />
        </div>

        <div id="hidden_div2">
          <Project2 />
        </div>

        <div id="hidden_div3">
          <Project3 />
        </div>

      </div>


    </div>


    </>
  );
};

export default Projects;
