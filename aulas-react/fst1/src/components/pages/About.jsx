import React from 'react';
import './About.css'

const About = (props) => {
    return (
        <div className='about'>
            <section>
                <img src={props.path} alt={props.name} className='image'></img>
                <h3>{props.name}</h3>
                <p>{props.description}</p>
            </section>
        </div>
    );
}

export default About;