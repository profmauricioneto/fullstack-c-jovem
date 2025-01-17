import React, { Fragment } from 'react';
import './calculateAge.css'

const CalculateAge = (props) => {
    const age = new Date().getFullYear() - parseInt(props.birthYear);
    return (
        <Fragment>
            <h3>If you birth in {props.birthYear}, so you have {age}</h3>
        </Fragment>
    )
}

export default CalculateAge;