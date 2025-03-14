import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";

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
`;

const RegisterPage = ({ onRegister }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post("http://localhost:3001/user", {
        name,
        email,
        password,
      });
      onRegister(response.data);
    } catch (error) {
      console.error("Error to register user: ", error);
    }
  };

  return (
    <DivCenter>
      <Form onSubmit={handleSubmit}>
        <Title>Register Page</Title>
        <Label htmlFor="name">
          Name
          <Input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </Label>
        <Label htmlFor="email">
          Email
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
        <Button type="submit">Register</Button>
      </Form>
    </DivCenter>
  );
};

export default RegisterPage;
