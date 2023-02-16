import React from 'react'
import Header from '../Sections/Header';
import Nav from '../Sections/Nav';
import Footer from '../Sections/Footer';
import NavList from '../Sections/NavList';
import {Container} from '../Global/components';
import TopFooter from '../Components/TopFooter';
import Ad from '../Components/Ad';
import RelatedProduct from '../Sections/RelatedProduct';
import Description from '../Sections/Description';
import HeroElectronics from '../Sections/HeroElectronics';

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

