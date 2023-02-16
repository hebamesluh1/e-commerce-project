import React from 'react'
import {Container} from '../../Global/components'
import Footer from '../../Components/Footer'
import Header from '../../Components/Header'
import styled from 'styled-components';

import Ad from '../../Components/Ad';
import SavedLater from './sections/SavedLater';
import Note from './sections/Note';
import HeroCart from './sections/HeroCart';

const Head = styled.h1`
    ${props=>props.theme.fonts.h4}
    color:${props=>props.theme.palette.contentColor};
    display:inline-block;
    margin:30px 0;
`
export default function BasicCart() {
    return (
        <>
        <Header/>
        <Container>
            <Head>My cart (3)</Head>
            <HeroCart />
            <Note />
            <SavedLater />
            <Ad />
        </Container>
        <Footer />
        </>
    )
}
