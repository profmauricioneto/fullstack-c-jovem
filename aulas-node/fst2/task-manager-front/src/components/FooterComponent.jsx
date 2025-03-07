import React from 'react';
import styled from 'styled-components';

const Footer = styled.footer`
    position: relative;
    bottom: 0;
    background-color: #c1c1c1;
    width: 100%;
    text-align: center;
    height: 15%;
`;

const FooterDescription = styled.p`
    padding-top: 10px;
    font-weight: bold;
`;
const FooterComponent = () => {
    return (
        <Footer>
            <FooterDescription>Carinhosamente desenvolvido por @mauricio com a turma @fst2</FooterDescription>
        </Footer>
    );
};

export default FooterComponent;