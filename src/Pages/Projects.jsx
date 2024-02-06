import React from 'react';
import BackButton from '../Components/BackButton';
import "../Styles/projects.css"

const Projects = () => {
  return (
    <>
    <BackButton />
    
    <div id="project_container">

    <div id="preview_box">
      <p>Preview Box</p>
    </div>

    <div id="link_box">
      <a href="/Project1">BLOG&nbsp;WEBSITE</a>
      <a href="/Project2">MOTION&nbsp;GRAPHICS</a>
      <a href="/Project3">INTERIOR&nbsp;DESIGN</a>
    </div>

    </div>
    </>

    
  );
}

export default Projects;
