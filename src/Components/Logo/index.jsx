import logoImg from '../../Assets/image/header/logo.png';
import React from 'react';
import styled from 'styled-components';

const LogoStyled = styled.div`
    padding: 0 ;
`;

const Logo = () => {
    return (
        <LogoStyled>
            <img src={logoImg} alt="logo-img" />
        </LogoStyled>
    );
};

export default Logo;
