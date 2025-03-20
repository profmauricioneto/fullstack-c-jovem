import React, { useEffect, useState } from 'react';
import LoginPage from './LoginPage';
import RegisterPage from './RegisterPage';
import UserPage from './UserPage';

const App = () => {
    const [user, setUser] = useState(null);
    const [isRegister, setIsRegister] = useState(false);

    useEffect(() => {
        const userStored = localStorage.getItem('user');
        if(userStored) {
            setUser(JSON.parse(userStored));
        }
    }, []);

    const handleLogin = (logginUser) => {
        setUser(logginUser);
        localStorage.setItem('user', JSON.stringify(logginUser));
    }

    const handleLougout = () => {
        setUser(null);
        localStorage.removeItem('user');
    }

    const handleRegister = (registerUser) => {
        setUser(registerUser);
        localStorage.setItem('user', JSON.stringify(registerUser));
    }

    return(
        <div>
            {user ? (
                <UserPage user={user} onLogout={handleLougout} />
            ) : isRegister ? (
                <RegisterPage onRegister={handleRegister} />
            ) : (
                <LoginPage onLogin={handleLogin} />
            )}
            {!user && (
                <button onClick={() => setIsRegister(!isRegister)}>
                    {isRegister ? 'Já possui uma conta? Faça o login' : 'Não tem registro? Faça uma conta.'}
                </button>
                )}
        </div>
    );
};

export default App;