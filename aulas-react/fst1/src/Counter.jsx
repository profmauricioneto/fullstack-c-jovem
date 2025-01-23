import React, { useState } from 'react';



const Counter = () => {

    let [counter, setCounter] = useState(0);

    return (
        <div>
            <h3>Quantidade de contagens: {counter}</h3>
            <button onClick={() => setCounter(counter++)}>Click</button>
        </div>
    );
}

export default Counter;