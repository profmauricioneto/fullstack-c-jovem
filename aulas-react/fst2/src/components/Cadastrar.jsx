import React, { useState, useEffect } from 'react';
import './Cadastrar.css'

const Cadastrar = () => {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [error, setError] = useState('');

    useEffect(() => {
        console.log('Chamada após a renderização!');

        return () => {
            console.log('Componente sendo desmontado.');
        } 
    }, []);

    const handleOnChange = (event) => {
        const { name, value } = event.target;
        if (name === 'nome') {
            setNome(value);
        } else if (name === 'email') {
            setEmail(value);
        } else if (name === 'senha') {
            setSenha(value);
        }
        // console.log (nome, email, senha);
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        if (!nome || !email || !senha) {
            setError('Um dos campos não esta preenchido!');
        } else {
            console.log('Enviando dados da API...', {nome, email, senha});
            // limpar os campos
            setNome('');
            setEmail('');
            setSenha('');
            setError('');
        }
    }


    return (
        <form onSubmit={handleSubmit}>
            <input 
                type='text'
                name='nome'
                value={nome}
                onChange={handleOnChange}
                placeholder='escreva seu nome'
            />
            <input 
                type='text'
                name='email'
                value={email}
                onChange={handleOnChange}
                placeholder='escreva seu email'
            />
            <input 
                type='password'
                name='senha'
                value={senha}
                onChange={handleOnChange}
                placeholder='escreva sua senha'
            />
            <button type='submit'>Cadastrar</button>
            <p>{error}</p>
        </form>
    );
}

export default Cadastrar;