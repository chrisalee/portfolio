import React from 'react';
import Introduction from '../components/Introduction';
import AboutMe from '../components/AboutMe';
import Technologies from '../components/Technologies';
import AboutMe2 from '../components/AboutMe2';
import MyProjects from '../components/MyProjects';
// import data from '../data';

const Home = () => {

    return (
        <div>
            <Introduction />
            <AboutMe />
            <Technologies />
            <AboutMe2 />
            <MyProjects />
        </div>
    )
}

export default Home;
