import React from 'react'

//sections and components
import Header from '../../Sections/Header';
import Nav from '../../Sections/Nav';
import Footer from '../../Sections/Footer';
import NavList from '../../Sections/NavList';

import Aside from './sections/Aside';
import SecondSection from './sections/SecondSection';

import FooterListPage from '../../Sections/FooterListPage';
import TopFooter from '../../Components/TopFooter';


//style
import {Container} from '../../Global/components';

import CheckProvider from '../../Context/checkBoxContext';

export default function TechStore() {
    return (
        <>
            <Header show="show"/>
            <Nav/>
            <NavList />
            <Container>
                <CheckProvider>
                    <div style={{display:'flex'}}>
                        <Aside />
                        <SecondSection />
                    </div>
                </CheckProvider>
            <FooterListPage />
            </Container>
            <TopFooter/>
            <Footer />
        </>
    )
}
