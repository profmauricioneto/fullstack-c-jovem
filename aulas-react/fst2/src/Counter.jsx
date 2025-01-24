import React from 'react';
import { useState } from 'react';

const Counter = () => {
    let [counter, setCounter] = useState(0);
    return (
        <div>
            <h3>Você clicou um total de {counter} clicks no botão!</h3>
            <button onClick={() => setCounter(counter++)}>Clique Aqui</button>
        </div>
    );
}

export default Counter;