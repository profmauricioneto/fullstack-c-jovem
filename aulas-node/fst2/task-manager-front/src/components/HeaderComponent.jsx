import React from 'react';
import styled from 'styled-components';


const Header = styled.header`
    height: 20%;
    text-align: center;
    font-family: Roboto, sans-serif;
`;

const Title = styled.h3`
    text-transform: uppercase;
    font-size: 1.4rem;
    padding: 10px;
`;

const Subtitle = styled.h4`
    font-size: 1.1rem;
    padding: 10px;
`;

const HeaderComponent = () => {
    return(
        <Header>
            <Title>Gerenciador de Tarefas</Title>
            <Subtitle>Aplicação de Gerenciamento Web de Tarefas</Subtitle>
        </Header>
    );
};

export default HeaderComponent;