import React from 'react'
import styled from 'styled-components';

import {BackgroundWhite} from '../../Global/components'

import ListHero from '../../Components/ListHero';
import {Container} from '../../Global/components';
import MainHero from './../../Components/MainHero';
import FormHero from './../../Components/FormHero';



const WrapperStyledGrid=styled(BackgroundWhite)`
    display:grid;
    grid-template-columns: 20% 1fr 15%;
    gap:20px;
    padding:20px;
    margin-top:20px;
`

export default function HeroMain() {
    return (
            <Container>
                <WrapperStyledGrid>
                <ListHero/>
                <MainHero />
                <FormHero />
                </WrapperStyledGrid>
                
            </Container>
    )
}
