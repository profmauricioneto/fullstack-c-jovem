import React, { Fragment } from "react";

export const Hello = (props) => <h2>Hello {props.name}</h2>

export const BirthCalculator = (props) => {
    const age = props.age;
    const currentYear = new Date().getFullYear();
    const birthYear = currentYear - age;

    return (
        <Fragment>
            <h2>Your age is {age}</h2>
            <h2>Your birth year is {birthYear}</h2>
        </Fragment>
    );
}