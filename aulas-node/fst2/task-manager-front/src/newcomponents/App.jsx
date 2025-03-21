import React, { useEffect, useState } from 'react';
import RegisterPage from './RegisterPage';
import LoginPage from './LoginPage';
import UserPage from './UserPage';

const App = () => {
    const [user, setUser] = useState(null);
    const [isRegister, setIsRegister] = useState(false);

    useEffect(() => {
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }
    }, [])

    const handleLogin = (logginUser) => {
        setUser(logginUser);
        localStorage.setItem('user', JSON.stringify(logginUser));
    };

    const handleRegister = (registerUser) => {
        setUser(registerUser);
        localStorage.setItem('user', JSON.stringify(registerUser));
    };

    const handleLogout = () => {
        setUser(null);
        localStorage.removeItem('user');
    }

    return (
        <div>
            {user ? (
                <UserPage user={user} onLogout={handleLogout} />
            ) : isRegister ?
            (
                <RegisterPage onRegister={handleRegister} />
            ) : (
                <LoginPage onLogin={handleLogin} />
            )}
            {!user && (
                <button onClick={() => setIsRegister(!isRegister)}>
                    {isRegister ? 'Do you have an account? Login it' : 'Doenst have an account? Register yourself!'}
                </button>
            )}
        </div>
    );
};

export default App;