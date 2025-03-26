import React, { useEffect, useState } from 'react';
import RegisterPage from './RegisterPage';
import LoginPage from './LoginPage';
import UserPage from './UserPage';

const App = () => {
    const [user, setUser] = useState(null);
    const [isRegister, setIsRegister] = useState(false);

    useEffect(() => {
        const storedUser = localStorage.getItem('user');
        const token = localStorage.getItem('token');
        if (storedUser && token) {
            try {
                setUser(JSON.parse(storedUser));
            } catch (error) {
                console.error('Erro ao analisar o JSON do usuário:', error);
                localStorage.removeItem('user');
                localStorage.removeItem('token');
            }
        } else {
            localStorage.removeItem('user');
            localStorage.removeItem('token');
        }
    }, [])

    const handleLogin = (logginUser) => {
        setUser(logginUser.user);
        localStorage.setItem('user', JSON.stringify(logginUser.user));
        localStorage.setItem('token', logginUser.token);
    };

    const handleRegister = (registerUser) => {
        setUser(registerUser.user);
        localStorage.setItem('user', JSON.stringify(registerUser.user));
        localStorage.setItem('token', registerUser.token);
    };

    const handleLogout = () => {
        setUser(null);
        localStorage.removeItem('user');
        localStorage.removeItem('token');
    }

    return (
        <div>
            {user ? (
                <UserPage user={user} onLogout={handleLogout} />
            ) : isRegister ? (
                <RegisterPage onRegister={handleRegister} />
            ) : (
                <LoginPage onLogin={handleLogin} onToggleRegister={() => setIsRegister(true)} />
            )}
            {!user && (
                <button onClick={() => setIsRegister(!isRegister)}>
                    {isRegister ? 'Do you have an account? Login it' : 'Don\'t have an account? Register yourself!'}
                </button>
            )}
        </div>
    );
};

export default App;