import React, { useState } from "react";
import axios from "axios";
import styled from "styled-components";


const DivCenter = styled.div`
  height: 100vh;
  display: flex;
  align-itens: center;
  justify-content: center;
  background-color: #efefef;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 5px;
  width: 50%;
  margin: auto;
  font-family: roboto, sans-serif;
`;

const Title = styled.h2`
    margin: 25px auto;
`;

const Label = styled.label`
  display: flex;
  flex-direction: column;
  font-weight: bold;
  text-align: center;
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
  width: 200px;
  align-self: center;
  margin-top: 10px;
`;

const LoginPage = ({ onLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post("http://localhost:3001/user/login", {
        email,
        password,
      });
      onLogin(response.data);
    } catch (error) {
      console.error("Error to logging: ", error);
      alert("Error to logging your account.");
    }
  };

  return (
    <DivCenter>
      <Form onSubmit={handleSubmit}>
        <Title>Login Page</Title>
        <Label htmlFor="email">
          E-mail
          <Input
            type="text"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </Label>
        <Label htmlFor="password">
          Password
          <Input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </Label>
        <Button type="submit">Login</Button>
      </Form>
    </DivCenter>
  );
};

export default LoginPage;
