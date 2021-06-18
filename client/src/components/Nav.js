import React from "react";
import HeaderLogo from "../images/logo.png";
import ChristopherLeeResume from "../images/ChristopherLeeResume.pdf";

const Nav = () => {

  const handleClickOpen = (event) => {
    document.body.classList.toggle('nav-open');
  }
  const handleClickClose = (event) => {
    document.body.classList.remove('nav-open');
  }

  return (
    <div className='header'>
      <div className="logo">
        <img src={HeaderLogo} alt="" className="logo__image" />
      </div>
      <div className="resume">
        <a
          href={ChristopherLeeResume}
          target="_blank"
          download="ChristopherLeeResume"
          className="resume-link"
        >
          View Resume
        </a>
      </div>
      <div>
        <button className="nav-toggle" aria-label="toggle navigation" onClick={handleClickOpen}>
          <span className="hamburger"></span>
        </button>
        <nav className="nav">
          <ul className="nav__list">
            <li className="nav__item" onClick={handleClickClose}>
              {" "}
              <a href="#home" className="nav__link">
                Home
              </a>{" "}
            </li>
            <li className="nav__item" onClick={handleClickClose}>
              {" "}
              <a href="#aboutme" className="nav__link">
                About Me
              </a>{" "}
            </li>
            <li className="nav__item" onClick={handleClickClose}>
              {" "}
              <a href="#technologies" className="nav__link">
                Technologies
              </a>{" "}
            </li>
            <li className="nav__item" onClick={handleClickClose}>
              {" "}
              <a href="#mywork" className="nav__link">
                Portfolio
              </a>{" "}
            </li>
            <li className="nav__item" onClick={handleClickClose}>
              {" "}
              <a href="#contact" className="nav__link">
                Contact
              </a>{" "}
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Nav;
