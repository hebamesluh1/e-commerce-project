import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const FooterNav = styled.ul`
  display: flex;
  list-style:none;
  gap: 30px;
  & li {
    font-weight: 400;
    font-size: 16px;
    color: #606060;
    opacity: 0.6;
  }
  a{
    text-decoration:none;
    color: #606060;
  }
`;
export default function FormsFooterNav() {
    return (
      <FooterNav>
        <li>
          <NavLink to={"/"}>Support</NavLink>
        </li>
        <li>
          <NavLink to={"/"}>Privacy & Cookies</NavLink>
        </li>
        <li>
          <NavLink to={"/"}>Accessibility</NavLink>
        </li>
      </FooterNav>
    );
}