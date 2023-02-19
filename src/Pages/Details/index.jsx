import React from "react";

//style
import { Container } from "../../Global/components";

//components
import TopFooter from "../../Components/TopFooter";
import Ad from "../../Components/Ad";
import RelatedProduct from "./sections/RelatedProduct";
import Description from "./sections/Description";
import HeroElectronics from "./sections/HeroElectronics";
import Header from "../../Components/Header";
import Nav from "../../Components/Nav";
import Footer from "../../Components/Footer";
import NavList from "../../Components/NavList";

export default function Details() {
  return (
    <>
      <Header show="show" />
      <Nav />
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
  );
}
