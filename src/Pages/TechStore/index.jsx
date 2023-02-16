import React from 'react'

//sections and components
import Header from '../../Components/Header';
import Nav from '../../Components/Nav';
import Footer from '../../Components/Footer';
import NavList from '../../Components/NavList';

import Aside from './sections/Aside';
import SecondSection from './sections/SecondSection';

import FooterListPage from './sections/SecondSection/components/FooterListPage';
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
