import React from "react";

//sections and components
import Header from "../../Components/Header";
import Nav from "../../Components/Nav";
import Footer from "../../Components/Footer";
import NavList from "../../Components/NavList";

import Aside from "./sections/Aside";
import SecondSection from "./sections/SecondSection";

import FooterListPage from "./sections/SecondSection/components/FooterListPage";
import TopFooter from "../../Components/TopFooter";

//style
import { Container } from "../../Global/components";

import CheckProvider from "../../Context/checkBoxContext";
import styled from "styled-components";
const Style = styled.div`
display:flex;
  @media (max-width: 920px) {
    justify-content: center;
  }
`;
export default function TechStore() {
  return (
    <>
      <Header show="show" />
      <Nav />
      <NavList />
      <Container>
        <CheckProvider>
          <Style>
            <Aside />
            <SecondSection />
          </Style>
        </CheckProvider>
        <FooterListPage />
      </Container>
      <TopFooter />
      <Footer />
    </>
  );
}
