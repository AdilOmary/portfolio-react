import React from 'react'
import { ProjectsData } from '../../data/projects';
import ProjectCard from './project-card'
import './projects.css'
import Separator from "../../common/separator/separator"

function Projects() {
  const data = ProjectsData
  return (
    <div className='projects'>
    <Separator />
      <label className='section-title'> Projects</label>
      <div>
        {data.map((project)=> {
          return <ProjectCard project={project} />;
        })}
      </div>
    </div>
  );
}

export default Projects;
