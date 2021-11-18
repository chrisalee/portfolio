import React from "react";
import { Link } from "react-router-dom";
import data from "../data";

const MyProjects = () => {
  return (
    <div>
      <section className="myWork" id="myWork">
        <h2 className="section__title section__title--myWork">My Work</h2>
        <p className="section__subtitle section__subtitle--myWork">
          A selection of my range of work
        </p>

        <div className="portfolio">
          {data.projects.map((project) => (
            <Link key={project._id} to={`/portfolio/${project._id}`} className="portfolio__item">
              <img
                src={project.images[0]}
                alt={project.name}
                className="portfolio__imag"
                loading='lazy'
              />
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
};

export default MyProjects;
