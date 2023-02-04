import React from 'react'
import Header from '../Sections/Header';
import Nav from '../Sections/Nav';
import Footer from '../Sections/Footer';
import NavList from '../Sections/NavList';
import Aside from '../Sections/Aside';
import {Container} from '../Global/components';
import FooterListPage from '../Sections/FooterListPage';
import SecondSectionElec from '../Sections/SecondSectionElec';
import TopFooter from '../Components/TopFooter';

export default function Electronic() {
    return (
        <>
        <Header show="show"/>
        <Nav/>
        <NavList />
        <Container>
        <div style={{display:'flex'}}>
            <Aside />
            <SecondSectionElec />
        </div>
        <FooterListPage />
        </Container>
        <TopFooter />
        <Footer />
        </>
    )
}
