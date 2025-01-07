import React from "react";

const Greeting = (props) => {
    return (
        <div>
            <h2>Greeting Mr(s) {props.name}</h2>
            <p>This is your first component!</p>
        </div>
    );
}

export default Greeting;