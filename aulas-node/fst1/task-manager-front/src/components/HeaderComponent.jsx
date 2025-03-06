import React from 'react';
import styled from 'styled-components';

const Header = styled.header`
    height: 15%;
    text-align: center;
    color: #444;
    font-family: Roboto, sans-serif;
`;

const H2 = styled.h2`
    padding: 10px;
`;

const P = styled.p`
    padding: 10px;
`;

const HeaderComponent = () => {
    
    return(
        <Header>
            <H2>Gerenciador de Tarefas</H2>
            <P>Aplicação de Gerenciamento de Tarefas para Estudos</P>
        </Header>
    );
};  

export default HeaderComponent;