import React from "react";
// import MyProjects from "../components/MyProjects";
import data from "../data";

const Project = (props) => {

  const project = data.projects.find((x) => x._id === props.match.params.id);

  return (
    <div>
      {/* <!-- Intoduction --> */}
      <section className="intro" id="home">
        <h1 className="section__title section__title--intro">
          { project.name }
        </h1>
        <p className="section__subtitle section__subtitle--intro">ReactJS</p>
        <img
          src={project.images[0]}
          alt={project.name}
          className="intro__img portfolio-image-individual"
        />
      </section>

      <div className="portfolio-item-individual">
        <p>{project.subtitle}</p>
        <img
          src={project.images[1]}
          alt={project.name}
          className="portfolio-image-individual__main"
        />
        <a href={project.url} target="_blank" rel='no'>
          {project.category}
        </a>
        <p>
          {project.description}
        </p>
        <p>
          {project.description2}
        </p>
      </div>
    </div>
  );
};

export default Project;