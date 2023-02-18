import React from "react";
import Logo from "../../Components/Logo/index";
import Menu from "../../Components/Menu";
import SearchForm from "./../../Components/SearchForm";
import Hr from "./../../Components/Hr";

import styled from "styled-components";
import { Container, FlexBetween } from "../../Global/components";
import Mobile from "./../Mobile/index";
import NotMobile from "./../NotMobile";
import MobileHeader from "./../MobileHeader/index";

const HeaderStyled = styled(FlexBetween)`
  margin: 20px 0;
`;
export default function Header({ show }) {
  return (
    <>
      <Mobile>
        <MobileHeader />
      </Mobile>
      <NotMobile>
        <Container>
          <HeaderStyled>
            <Logo />
            <SearchForm show={show} />
            <Menu />
          </HeaderStyled>
        </Container>
        <Hr />
      </NotMobile>
    </>
  );
}
