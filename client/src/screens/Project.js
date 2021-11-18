import React, { useEffect } from "react";
import data from "../data";

const Project = (props) => {

  const project = data.projects.find((x) => x._id === props.match.params.id);

  useEffect(() => {
    window.scrollTo(0, 0)
  }, []);

  return (
    <div className='individual__project--container'>
      {/* <!-- Intoduction --> */}
      <section className="intro">
        <h1 className="section__title section__title--intro">
          { project.name }
        </h1>
        <p className="section__subtitle section__subtitle--intro">{project.subtitle}</p>
        <img
          src={project.images[0]}
          alt={project.name}
          className="intro__img portfolio-image-individual"
          loading='lazy'
        />
      </section>

      <div className="portfolio-item-individual">
        <p>{project.subtitle}</p>
        <img
          src={project.images[1]}
          alt={project.name}
          className="portfolio-image-individual__main"
          loading='lazy'
        />
        <a href={project.url} target="_blank" rel="noreferrer">
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
