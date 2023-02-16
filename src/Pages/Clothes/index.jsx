import React from 'react'

//style
import {Container} from '../../Global/components';

//components
import TopFooter from '../../Components/TopFooter';
import Ad from '../../Components/Ad';
import RelatedProduct from './sections/RelatedProduct';
import Description from './sections/Description';
import HeroElectronics from './sections/HeroElectronics';
import Header from '../../Sections/Header';
import Nav from '../../Sections/Nav';
import Footer from '../../Sections/Footer';
import NavList from '../../Sections/NavList';


export default function Clothes() {
    return (
        <>
        <Header show="show"/>
        <Nav/>
        <NavList />
        <Container>
            <HeroElectronics />
            <Description />
            <RelatedProduct />
            <Ad />
        </Container>
        <TopFooter />
        <Footer />
        </>
    )
}

