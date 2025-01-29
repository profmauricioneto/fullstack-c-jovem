import React, { useEffect, useState } from 'react';

function GetAPIData() {

    const [data, setData] = useState([]);

    useEffect(() => {
        console.log('Carregando os dados durante a montagem.');
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then((resp) => resp.json())
        .then((data) => {
            setData(data)
            console.log(data)
        })
        .catch((error) => console.log(error));
    }, []);

    return (
    <div>
        Carregando os dados da API...
        <ul>
        {data.map((item) => (
            <li key={item.id}>{item.body}</li>
        ))}
        </ul>
    </div>
    );
}

export default GetAPIData; 