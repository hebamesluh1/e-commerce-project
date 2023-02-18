import React from 'react'
import styled from 'styled-components';

import {BackgroundWhite} from '../../../../Global/components'
import {Container} from '../../../../Global/components';

import ListHero from './components/ListHero';
import MainHero from './components/MainHero';
import FormHero from './components/FormHero';



const WrapperStyledGrid=styled(BackgroundWhite)`
    display:grid;
    grid-template-columns: 20% 1fr 15%;
    gap:20px;
    padding:20px;
    margin-top:20px;
    @media(max-width:920px){
    display:grid;
    grid-template-columns:1fr;
  }
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
