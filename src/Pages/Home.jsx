import React from 'react'
import Header from './../Sections/Header/index';
import Footer from './../Sections/Footer/index';
import { Outlet } from 'react-router-dom';

const Home = () => {
    return (
        <>
        <Header show="show"/>
            {Outlet}
        <Footer />
        </>
    )
}

export default Home