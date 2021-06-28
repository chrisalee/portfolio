import React from 'react';

const Footer = () => {
    return (
        <div className='footer'>
            <a href="mailto:chrisalee222@gmail.com" className="footer__link">chrisalee222@gmail.com</a>
        <ul className="social--list">
            <li className="social--list__item">
                <a href="https://www.linkedin.com/in/christopheralee22/" className="social--list__link" target="_blank"  rel="noopener noreferrer">
                    <i className="fab fa-linkedin"></i>
                </a>
            </li>
            <li className="social--list__item">
                <a href="https://twitter.com/chrisl222" className="social--list__link" target="_blank"  rel="noopener noreferrer">
                    <i className="fab fa-twitter"></i>
                </a>
            </li>
            {/* <li className="social--list__item">
                <a href="https://www.instagram.com/chrisalee222/" className="social--list__link" target="_blank"  rel="noopener noreferrer">
                    <i className="fab fa-instagram"></i>
                </a>
            </li>
            <li className="social--list__item">
                <a href="https://www.facebook.com/chrisalee222/" className="social--list__link" target="_blank"  rel="noopener noreferrer">
                    <i className="fab fa-facebook-square"></i>
                </a>
            </li> */}
            <li className="social--list__item">
                <a href="https://github.com/chrisalee" className="social--list__link" target="_blank"  rel="noopener noreferrer">
                    <i className="fab fa-github"></i>
                </a>
            </li>
        </ul>
        </div>
    )
}

export default Footer
