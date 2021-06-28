import React from "react";
import { Link } from "react-router-dom";
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
            <Link to={`/portfolio/${project._id}`} className='portfolio__item'>
              <img
                src={project.images[0]}
                alt={project.name}
                className="portfolio__image "
              />
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
};

export default MyProjects;
