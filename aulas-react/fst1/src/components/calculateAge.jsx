import React from 'react';

export default function CalculateAge(props) {
    const age = new Date().getFullYear() - parseInt(props.birthYear);

    return (
        <h2>Your age is {age}</h2>
    );
}