import React from "react";
import styled from "styled-components";
import FormsFooterNav from "../FormsFooterNav";
import PayMethods from "../PayMethods";

const Footer = styled.footer`
  background-color: ${props=>props.theme.palette.sectionBackground};
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 26px 124px;
  column-gap: 40px;
  row-gap: 15px;
  position: fixed;
  bottom: 0;
  width: 100%;
  
  @media (max-width: 600px) {
    & {
      padding: 26px 50px;
    }
  }
`;
export default function FormFooter() {
  return (
    <Footer>
        <PayMethods />
        <FormsFooterNav />
      </Footer>
  );
}