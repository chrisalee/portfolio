import React, { useEffect, useState } from "react";

const AboutMe = () => {
  const handleClick = (event) => {
    event.preventDefault();
    anchorTarget.scrollIntoView({ behavior: 'smooth', block: 'start' });  };

  const [anchorTarget, setAnchorTarget] = useState(null);

  useEffect(() => {
    setAnchorTarget(document.getElementById("myWork"));
  }, []);

  return (
    <div>
      <section className="aboutme" id="aboutme">
        <h2 className="section__title section__title--aboutme">About Me</h2>
        <div className="services">
          <div className="service">
          {/* <h3>About Me</h3> */}
            <p>
              Enthusiast Full-Stack Developer passionate about finding creative
              solutions to any problem. Highly motivated developer with hands on
              experience designing and developing web applications. I have
              discovered an eagerness to learn new things, and I enjoy being
              part of a team. I enjoy being creative and hope to find a position
              that expands upon my experiences and helps me to grow as a
              developer.
            </p>
          </div>
          {/* <!-- close service --> */}
          <div className="service">
            <h3>Languages</h3>
            <p>MERN, ReactJS</p>
            <p>JavaScript</p>
            <p>Python</p>
            <p>C#</p>
            <p>MEAN</p>
          </div>
          {/* <!-- close service --> */}
          <div className="service">
            {/* <h3>My Education</h3> */}
            <p>
            Looking for an opportunity to launch a new career in software development among others that are passionate about the industry.
            I am team-oriented, well liked, and willing to dive head first into any new challenge put in front of me. I'm currently seeking a role in which I can help build unique and dynamic websites and face new technical and creative challenges daily that will allow me to continue to grow my skill set as a developer. 
            </p>
          </div>
          {/* <!-- close service --> */}
        </div>
        {/* <!-- close services --> */}
        <a href="/#myork" className="btn" onClick={handleClick}>
          My Portfolio
        </a>
      </section>
    </div>
  );
};

export default AboutMe;
