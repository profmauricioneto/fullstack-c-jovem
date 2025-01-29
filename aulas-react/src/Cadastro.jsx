import React, {useEffect, useState} from 'react';
import './Cadastro.css'

function Cadastro() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');


    useEffect(() => {
        console.log('Mensagem enviada após a renderização');
        
        return (() => {
            console.log('Componente acabando...');
        })
    }, []);

    const handleChange = (event) => {
        const {name, value} = event.target;
        if (name === 'username') {
            setName(value);
        }
        if (name === 'email') {
            setEmail(value);
        }
        if (name === 'password'){
            setPassword(value);
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        if (!name || !email || !password) {
            setErrorMessage("Error! Some field are empty");
        } else {
            console.log('Data: ', {name, email, password});
            setName('');
            setEmail('');
            setPassword('');
            setErrorMessage('');
        }
    };

    return(
        <form onSubmit={handleSubmit}>
            <input
                type='text'
                name='username'
                value={name}
                onChange={handleChange}
                placeholder='your name'
            />
            <input 
                type="text"
                name='email'
                value={email}
                onChange={handleChange}
                placeholder='your email' 
            />
            <input 
                type="password"
                name='password'
                value={password}
                onChange={handleChange}
                placeholder='your password'
            />
            <button type='submit'>Submit</button>
            <p>{errorMessage}</p>
        </form>
    );

}

export default Cadastro;