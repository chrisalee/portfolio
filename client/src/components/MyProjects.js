import React from "react";
import data from "../data";

const MyProjects = () => {
  return (
    <div>
      <section className="mywork" id="mywork">
        <h2 className="section__title section__title--mywork">My Work</h2>
        <p className="section__subtitle section__subtitle--mywork">
          A selection of my range of work
        </p>

        <div className="portfolio">
          {data.projects.map((project) => (
            <a href={project.url} className="portfolio__item">
              <img
                src={project.images[0]}
                alt={project.name}
                className="portfolio__image"
              />
            </a>
          ))}
        </div>
      </section>
    </div>
  );
};

export default MyProjects;
