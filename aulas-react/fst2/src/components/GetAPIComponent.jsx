import React, { useEffect, useState } from 'react';


const GetApiData = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        console.log('Carregando dados da API...');
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then((data) => data.json())
        .then((data) => {
            console.log(data)
            setData(data);
        })
        .catch((err) => console.log(err));        
    },[])

    return(
        <div>
            <h1>Carregando a API</h1>
            <ol>
                {/* {data.map((element) => (
                    <li key={element.id}>{element.userId} - {element.title}</li>
                ))} */}
                {data.filter((element) => {
                    return element.id <= 10
                }).map((element) => (
                    <li key={element.id}>{element.userId} - {element.title}</li>
                ))}
            </ol>
        </div>
    );
}

export default GetApiData;