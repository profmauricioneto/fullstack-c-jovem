import React, { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const Centralization = styled.div`
    height: 100vh;
    display: flex;
    align-itens: center;
    justify-content: center;
    background-color: #e8e9eb;
`;

const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin: auto;
    font-family: roboto, sans-serif;
    width: 50%;
`;

const Title = styled.h2`
    text-align: center;
    font-weight: bold;
    margin: 10px 0;
`;

const Label = styled.label`
    display: flex;
    flex-direction: column;
    font-weight: bold;
`;

const Input = styled.input`
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
`;

const Button = styled.button`
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    background-color: darkblue;
    color: white;
    font-weight: bold;
    cursor: pointer;

    &:hover {
        background-color: #092c63;
        transform: scale(1.05);
    }
`;

const RegisterPage = ({ onRegister }) => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit =  async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post('http://localhost:3000/user', { name, email, password });
            onRegister(response.data);
        } catch (error) {
            console.error('Error registering user: ', error);
        }
    }

    return (
        <Centralization>
        <Form onSubmit={handleSubmit}>
            <Title>Register Page</Title>
            <Label htmlFor="name">
                Name
                <Input 
                    type="text" 
                    id='name'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    />
            </Label>

            <Label htmlFor="email">
                Email
                <Input 
                    type="email" 
                    id='email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    />
            </Label>

            <Label htmlFor="password">
                Password
                <Input 
                    type="password" 
                    id='password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    />
            </Label>
            <Button type='submit'>Register</Button>
        </Form>
        </Centralization>

    );
};

export default RegisterPage;