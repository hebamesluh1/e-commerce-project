import logoImg from '../../Assets/image/header/logo.png';
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const LogoStyled = styled.div`
    padding: 0 ;
`;

const Logo = () => {
    return (
        <LogoStyled>
           <Link to="/home">
           <img src={logoImg} alt="logo-img" />
           </Link>
        </LogoStyled>
    );
};

export default Logo;
