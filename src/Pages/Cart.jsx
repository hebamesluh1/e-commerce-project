import React from 'react'
import {Container} from '../Global/components'
import Footer from '../Sections/Footer'
import Header from '../Sections/Header'
import styled from 'styled-components';
import Ad from './../Components/Ad/index';
import SavedLater from '../Sections/SavedLater';
import Note from '../Sections/Note';
import HeroCart from '../Sections/HeroCart';

const Head = styled.h1`
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 32px;
  letter-spacing: -0.2px;
  color: #1C1C1C;
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
