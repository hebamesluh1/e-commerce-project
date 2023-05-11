import React, { useState } from 'react'
import styled from 'styled-components';

import { BackgroundWhite } from '../../../../Global/components'
import { Container } from '../../../../Global/components';

import {ListHero} from './components/ListHero';
import MainHero from './components/MainHero';
import FormHero from './components/FormHero';
import { home_header_slides } from '../../../../mock/headerSides';



const WrapperStyledGrid = styled(BackgroundWhite)`
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
    const [activeSlide, setActiveSlide] = useState(0);
    return (
        <Container>
            <WrapperStyledGrid>
                <div>
                    {home_header_slides.map((slide, index) => {
                        return <ListHero
                            key={index}
                            active={index === activeSlide}
                            onClick={() => { setActiveSlide(index) }}
                        >{slide.name}</ListHero>
                    })}
                </div>
                <div>
                    {<MainHero {...home_header_slides.filter((slide, index) => index === activeSlide)[0].imageCard}></MainHero>}
                </div>
                <FormHero />
            </WrapperStyledGrid>

        </Container>
    )
}
