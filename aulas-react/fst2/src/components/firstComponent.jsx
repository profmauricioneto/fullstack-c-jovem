import React, { Fragment } from 'react';

export default function Hello(props) {
    const fullName = props.name + ' ' + props.surname;

    return (
        <Fragment>
            <h2>Hello From a Component</h2>
            <p>My name is {fullName}</p>
        </Fragment>
    )
}

// const Hello = () => {
//     return <h2>Hello - Part 2</h2>
// }

// export default Hello;