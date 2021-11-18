import React from 'react';
import HTML from '../images/HTML.png';
import CSS from '../images/CSS.png';
import JavaScript from '../images/JavaScript.png';
import jQuery from '../images/jQuery.png';
import ajax from '../images/ajax.png';
import Angular from '../images/angular.png';
import Python from '../images/python.png';
import CSharp from '../images/c-sharp.png';
import Bootstrap from '../images/bootstrap.png';
import nodeJS from '../images/nodejs.png';
import MongoDB from '../images/mongodb.png';
import MySQL from '../images/mysql.png';
import ReactJS from '../images/react.png';
import MEAN from '../images/MEAN.png';
import Express from '../images/expressjs.png';
import Django from '../images/django.png';
import GitHub from '../images/github.png';
import MERN from '../images/MERN.png';
import Flask from '../images/flask.png';
import Unity from '../images/unity.png';
import Firebase from '../images/firebase.png';

const Technologies = () => {

    const mouseEnter = (event) => {
        event.target.style.borderRadius = "50%";
        event.target.style.border = ".5em solid #303030";
        
    };
    const mouseLeave = (event) => {
        event.target.style.border = "none";
    }

    return (
        <div>
            <section className="technolgies" id='technologies'>
                <h2 className="section__title section__title--technolgies">Technologies</h2>
                <img loading='lazy' className="section__imgage section__image--technolgies" src={ HTML } alt="HTML" onMouseEnter={ mouseEnter } onMouseLeave={ mouseLeave } />
                <img loading='lazy' className="section__imgage section__image--technolgies" src={ CSS } alt="CSS" onMouseEnter={ mouseEnter } onMouseLeave={ mouseLeave } />
                <img loading='lazy' className="section__imgage section__image--technolgies" src={ JavaScript } alt="JS" onMouseEnter={ mouseEnter } onMouseLeave={ mouseLeave } />
                <img loading='lazy' className="section__imgage section__image--technolgies" src={ jQuery } alt="jQuery" onMouseEnter={ mouseEnter } onMouseLeave={ mouseLeave } />
                <img loading='lazy' className="section__imgage section__image--technolgies" src={ ajax } alt="ajax" onMouseEnter={ mouseEnter } onMouseLeave={ mouseLeave } />
                <img loading='lazy' className="section__imgage section__image--technolgies" src={ Angular } alt="Angular" onMouseEnter={ mouseEnter } onMouseLeave={ mouseLeave } />
                <img loading='lazy' className="section__imgage section__image--technolgies" src={ Python } alt="Python" onMouseEnter={ mouseEnter } onMouseLeave={ mouseLeave } />
                <img loading='lazy' className="section__imgage section__image--technolgies" src={ CSharp } alt="C#" onMouseEnter={ mouseEnter } onMouseLeave={ mouseLeave } />
                <img loading='lazy' className="section__imgage section__image--technolgies" src={ Bootstrap } alt="Bootstrap" onMouseEnter={ mouseEnter } onMouseLeave={ mouseLeave } />
                <img loading='lazy' className="section__imgage section__image--technolgies" src={ nodeJS } alt="nodejs" onMouseEnter={ mouseEnter } onMouseLeave={ mouseLeave } />
                <img loading='lazy' className="section__imgage section__image--technolgies" src={ MongoDB } alt="mongodb" onMouseEnter={ mouseEnter } onMouseLeave={ mouseLeave } />
                <img loading='lazy' className="section__imgage section__image--technolgies" src={ MySQL } alt="mysql" onMouseEnter={ mouseEnter } onMouseLeave={ mouseLeave } />
                <img loading='lazy' className="section__imgage section__image--technolgies" src={ ReactJS } alt="html" onMouseEnter={ mouseEnter } onMouseLeave={ mouseLeave } />
                <img loading='lazy' className="section__imgage section__image--technolgies" src={ MEAN } alt="MEAN" onMouseEnter={ mouseEnter } onMouseLeave={ mouseLeave } />
                <img loading='lazy' className="section__imgage section__image--technolgies" src={ Express } alt="Express" onMouseEnter={ mouseEnter } onMouseLeave={ mouseLeave } />
                <img loading='lazy' className="section__imgage section__image--technolgies" src={ Django } alt="django" onMouseEnter={ mouseEnter } onMouseLeave={ mouseLeave } />
                <img loading='lazy' className="section__imgage section__image--technolgies" src={ GitHub } alt="github" onMouseEnter={ mouseEnter } onMouseLeave={ mouseLeave } />
                <img loading='lazy' className="section__imgage section__image--technolgies" src={ MERN } alt="MERN" onMouseEnter={ mouseEnter } onMouseLeave={ mouseLeave } />
                <img loading='lazy' className="section__imgage section__image--technolgies" src={ Flask } alt="flask" onMouseEnter={ mouseEnter } onMouseLeave={ mouseLeave } />
                <img loading='lazy' className="section__imgage section__image--technolgies" src={ Unity } alt="unity" onMouseEnter={ mouseEnter } onMouseLeave={ mouseLeave } />
                <img loading='lazy' className="section__imgage section__image--technolgies" src={ Firebase } alt="firebase" onMouseEnter={ mouseEnter } onMouseLeave={ mouseLeave } />
            </section>
        </div>
    )
}

export default Technologies
