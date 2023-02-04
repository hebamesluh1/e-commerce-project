import React from 'react'
import Header from '../Sections/Header';
import Nav from '../Sections/Nav';
import Footer from '../Sections/Footer';
import NavList from '../Sections/NavList';
import Aside from '../Sections/Aside';
import SecondSection from '../Sections/SecondSection';
import {Container} from '../Global/components';
import FooterListPage from '../Sections/FooterListPage';
import TopFooter from '../Components/TopFooter';

export default function TechStore() {
    return (
        <>
        <Header show="show"/>
        <Nav/>
        <NavList />
        <Container>
        <div style={{display:'flex'}}>
            <Aside />
            <SecondSection />
        </div>
        <FooterListPage />
        </Container>
        <TopFooter/>
        <Footer />
        </>
    )
}
