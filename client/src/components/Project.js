import React from 'react';


const Project = (props) => {

    const { project } = props;

    return (
        <div>
            <a href="portfolio-item.html" className="portfolio__item">
                <img src={ project.images } alt={ project.name } className="portfolio__image" />
            </a>
        </div>
    )
}

export default Project
