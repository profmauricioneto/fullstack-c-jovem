import React from 'react';
import styled from 'styled-components';

const Footer = styled.footer`
    height: 4rem;
    background-color: #444;
    position: fixed;
    bottom: 0;
    width: 100%;
    text-align: center;
    color: white;
    padding-top: 10px;
`;

const FooterComponent = () => {
    return (
        <Footer>
            <p>Carinhosamente desenvolvido pela turma @fst1</p>
        </Footer>
    );
};

export default FooterComponent