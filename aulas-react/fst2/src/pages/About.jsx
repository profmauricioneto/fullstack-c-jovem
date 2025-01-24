import React from 'react';
import './About.css';

const About = (props) => {
    return (
        <div className='about'>
            <img src={props.src} alt={props.name} className='image-about'/>
            <h2>{props.name}</h2>
            <p>{props.description}</p>
        </div>
    );
}

export default About;