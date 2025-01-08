import React, { useState } from "react";

function Contador() {
    let [contador, setContator] = useState(0);

    return (
        <div>
            <h3>Você clicou um total de {contador}</h3>
            <button onClick={() => setContator(contador++)}>Clique</button>
        </div>
    );
}

export default Contador;