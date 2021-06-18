import React from "react";
import ProfilePic2 from "../images/ProfilePic2.jpg";
import Typed from "react-typed";

const AboutMe2 = () => {
  return (
    <div>
      <section className="about-me" id="about-me">
        <h2 className="section__title section__title--about">Who I Am?</h2>
        <p className="section__subtitle section__subtitle--about">
          <Typed
            className="typed-text"
            strings={["Full-Stack Developer located in Chicago, IL."]}
            typeSpeed={60}
            backSpeed={60}
            loop
          />
        </p>
        <div className="about-me__body">
          <p>
            Enthusiast Full-Stack Developer passionate about finding creative
            solutions to any problem. Highly motivated developer with hands on
            experience designing and developing web applications. I have
            discovered an eagerness to learn new things, and I enjoy being part
            of a team. I enjoy being creative and hope to find a position that
            expands upon my experiences and helps me to grow as a developer.
          </p>
          <p>
            Intensive 18 week coding boot camp where I spent over 1000 hours of
            coding coursework learning Web Fundamentals: HTML, CSS and
            JavaScript and then four full stacks: Python/Django, C# /.NET, MEAN,
            MERN as well utilizing different frameworks and technologies.
          </p>
        </div>
        <img src={ProfilePic2} alt="vert-pic" className="about-me__image" />
      </section>
    </div>
  );
};

export default AboutMe2;
