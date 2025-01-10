import React, { useState } from 'react';
import './FormularioCadastro.css';

function FormularioCadastro() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name === 'nome') {
      setNome(value);
    } else if (name === 'email') {
      setEmail(value);
    } else if (name === 'senha') {
      setSenha(value);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Simulação de envio para a API:
    console.log('Enviando dados:', { nome, email, senha });

    // Limpar o formulário:
    setNome('');
    setEmail('');
    setSenha('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="nome"
        value={nome}
        onChange={handleChange}
        placeholder="Nome"
      />
      <input
        type="email"
        name="email"
        value={email}
        onChange={handleChange}
        placeholder="Email"
      />
      <input
        type="password"
        name="senha"
        value={senha}
        onChange={handleChange}
        placeholder="Senha"
      />
      <button type="submit">Cadastrar</button>
    </form>
  );
}

export default FormularioCadastro;