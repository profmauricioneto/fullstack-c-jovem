import React, { useEffect } from 'react';

function GetAPIData() {
    useEffect(() => {
        console.log('Carregando os dados durante a montagem.');
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then((resp) => resp.json())
        .then((data)=> console.log(data));
    }, []);

    return <div>Carregando os dados da API...</div>
}

export default GetAPIData; 