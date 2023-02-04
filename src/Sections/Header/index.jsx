import React from 'react';
import Logo from '../../Components/Logo/index';
import Menu from '../../Components/Menu';
import SearchForm from './../../Components/SearchForm';
import Hr from './../../Components/Hr';

import styled from 'styled-components';
import {Container, FlexBetween} from '../../Global/components';


const HeaderStyled = styled(FlexBetween)`
    margin: 20px 0;
`
export default function Header({show}) {
    return (
        <>
        <Container>
        <HeaderStyled>
            <Logo/>
            <SearchForm show={show}/>
            <Menu />
        </HeaderStyled>
        </Container>
        <Hr />
        </>
    )
}
