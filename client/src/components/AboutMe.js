import React from 'react';

const AboutMe = () => {
    return (
        <div>
            <section className="aboutme" id="aboutme">
        <h2 className="section__title section__title--aboutme">What I Do</h2>
        <div className="services">
            <div className="service">
                <h3>Languages</h3>
                <p>JavaScript</p>
                <p>Python</p>
                <p>C#</p>
                <p>MEAN</p>
                <p>MERN</p>
            </div>
            {/* <!-- close service --> */}
            <div className="service">
                <h3>About Me</h3>
                <p>Enthusiast Full-Stack Developer passionate about finding creative solutions to any problem. Highly motivated developer with hands on experience designing and developing web applications. I have discovered an eagerness to learn new things, and I enjoy being part of a team. I enjoy being creative and hope to find a position that expands upon my experiences and helps me to grow as a developer.
                    </p>
            </div>
            {/* <!-- close service --> */}
            <div className="service">
                <h3>My Education</h3>
                <p>Intensive 18 week coding boot camp where I spent over 1000 hours of coding coursework learning Web Fundamentals: HTML, CSS and JavaScript and then four full stacks: Python/Django, C# /.NET, MEAN, MERN as well utilizing different frameworks and technologies.</p>
            </div>
            {/* <!-- close service --> */}
        </div>
        {/* <!-- close services --> */}
        <a href="#mywork" className="btn">My Portfolio</a>
    </section>
        </div>
    )
}

export default AboutMe;
