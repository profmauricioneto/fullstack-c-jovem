import React, { useState } from 'react';
import axios from 'axios';
import './UserForm.css';

const UserForm = ({ onUserCreated }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:3000/users', { name, email, password });
            onUserCreated(response.data);
            setName('');
            setEmail('');
            setPassword('');
        } catch (error) {
            console.error('Error creating user:', error);
        }
    };

    return (
        <form className="user-form" onSubmit={handleSubmit}>
            <label htmlFor="name">
                Nome:
                <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
            </label>
            <label htmlFor="email">
                Email:
                <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
            </label>
            <label htmlFor="password">
                Senha:
                <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
            </label>
            <button type="submit">Cadastrar</button>
        </form>
    );
};

export default UserForm;