import React from 'react';
import styled from 'styled-components';

import arrow from '../../Assets/image/ListStore/other/chevron_right.png';
import {Container} from '../../Global/components';
import { LinkStyle } from '../../Components/MenuNav/style';

const Style = styled.ul`
    display:flex;
    list-style:none;
    padding:20px 0;
    li{
        display:flex;
        align-item:center;
    }
    a{
        color: ${props=>props.theme.palette.gray500}
    }
`


export default function NavList() {
    return (
        <Container>
            <Style>
            <li><LinkStyle href="/#">Home </LinkStyle><img src={arrow} alt="arrow"/></li>
            <li><LinkStyle href="/#">Clothings </LinkStyle><img src={arrow} alt="arrow"/></li>
            <li><LinkStyle href="/#">Men's wear </LinkStyle><img src={arrow} alt="arrow"/></li>
            <li><LinkStyle href="/#">Summer clothing </LinkStyle><img src={arrow} alt="arrow"/></li>
        </Style>
        </Container>
    )
}
