import React from "react";
import SelfPorait from "../images/SelfPortrait.png";
import Typed from 'react-typed';

const Introduction = () => {
  return (
    <div>
      <section className="intro" id="intro">
        <h1 className="section__title section__title--intro">
          Hi, I am <strong>Christopher Lee</strong>
        </h1>
        <p className="section__subtitle section__subtitle--intro">
          <Typed
            className = 'typed-text'
            strings = {["ReactJS", "Python", "C#", "Angular", "SOFTWARE ENGINEER"]}
            typeSpeed = {40}
            backSpeed = {80}
            // loop
          />
        </p>
        <img src={SelfPorait} alt="anime-me" className="intro__img" loading='lazy' />
      </section>
    </div>
  );
};

export default Introduction;
