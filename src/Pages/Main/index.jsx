import React from 'react';

//sections 
import Header from '../../Components/Header';
import Nav from '../../Components/Nav';
import HeroMain from './sections/HeroMain';
import Footer from '../../Components/Footer';
import Supplier from './sections/Supplier';
import Services from './sections/Services';
import Items from './sections/Items';
import RequestSuppliers from './sections/RequestSuppliers';
import Products from './sections/Products';
import Offers from './sections/Offers';


//components
import TopFooter from '../../Components/TopFooter';




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