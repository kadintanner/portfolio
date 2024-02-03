import React from 'react';
import BackButton from '../Components/BackButton';
// import "../Styles/projects.css"

const Projects = () => {
  return (

    <>

    <div>
      <h2>Projects Page</h2>
    </div>

    <div>
      <a href="/Coding">Coding</a>
      <a href="/Design">Design</a>
      <a href="/Music">Music</a>
      <a href="/Photography">Photography</a>
      <a href="/Videography">Videography</a>
    </div>

    <BackButton />

    </>
    
  );
}

export default Projects;
