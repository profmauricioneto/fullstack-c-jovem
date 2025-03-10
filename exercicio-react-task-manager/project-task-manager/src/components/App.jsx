import React, { useState, useEffect } from 'react';
import LoginPage from './newcomponents/LoginPage';
import RegisterPage from './newcomponents/RegisterPage';
import UserPage from './newcomponents/UserPage';

const App = () => {
  const [user, setUser] = useState(null);
  const [isRegistering, setIsRegistering] = useState(false);

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const handleLogin = (loggedInUser) => {
    setUser(loggedInUser);
    localStorage.setItem('user', JSON.stringify(loggedInUser));
  };

  const handleRegister = (registeredUser) => {
    setUser(registeredUser);
    localStorage.setItem('user', JSON.stringify(registeredUser));
  };

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  return (
    <div>
      {user ? (
        <UserPage user={user} onLogout={handleLogout} />
      ) : isRegistering ? (
        <RegisterPage onRegister={handleRegister} />
      ) : (
        <LoginPage onLogin={handleLogin} />
      )}
      {!user && (
        <button onClick={() => setIsRegistering(!isRegistering)}>
          {isRegistering ? 'Já tem uma conta? Faça login' : 'Não tem uma conta? Registre-se'}
        </button>
      )}
    </div>
  );
};

export default App;