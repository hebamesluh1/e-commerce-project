import React from 'react';

//sections 
import Header from '../Sections/Header';
import Nav from '../Sections/Nav';
import HeroMain from '../Sections/HeroMain';
import Footer from '../Sections/Footer';
import Supplier from '../Sections/Supplier';
import Services from '../Sections/Services';
import Items from './../Sections/Items';
import RequestSuppliers from './../Sections/RequestSuppliers';
import Products from '../Sections/Products';
import Offers from '../Sections/Offers';


//components
import TopFooter from '../Components/TopFooter';


export default function main() {
    return (
        <>
        <Header show="show"/>
        <Nav/>
        <HeroMain />
        <Offers />
        <Products />
        <RequestSuppliers />
        <Items />
        <Services />
        <Supplier />
        <TopFooter />
        <Footer />
        </>
    )
}
