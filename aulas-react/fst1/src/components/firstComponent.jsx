import React from "react";

// export default function Greeting() {
//     return <h1>Hello World from Component</h1>
// }

const Greeting = (props) => {
    return (
        <div>
            <h1>Hello World from Component</h1>
            <p>Hello, My Name is {props.name} {props.surname}</p>
        </div>
    )
}

export default Greeting;