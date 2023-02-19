import React, { useState } from "react";

//images
import logo from "../../../Assets/image/mobile/logo.png";
import cart from "../../../Assets/image/mobile/shopping_cart.png";
import avatar from "../../../Assets/image/mobile/person.png";
import menu from "../../../Assets/image/mobile/menu.png";
import { FlexBetween, FlexCenter } from "./../../../Global/components";
import { Link } from "react-router-dom";
import { PATHS } from "./../../../routes/index";
import Navbar from "./Navbar/index";

const Top = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const toggleNav = () => {
    setIsNavOpen((prev) => !prev);
  };
  return (
    <>
      <Navbar
        closeNav={() => {
          setIsNavOpen(false);
        }}
        className={isNavOpen ? "open" : ""}
      />
      <FlexBetween style={{ paddingTop: "20px" }}>
        <FlexCenter style={{ gap: "20px" }}>
          <img
            src={menu}
            alt="menu"
            onClick={toggleNav}
            style={{ cursor: "pointer" }}
          />
          <img src={logo} alt="logo" />
        </FlexCenter>
        <FlexCenter style={{ gap: "20px" }}>
          <Link to={`${PATHS.HOME}/cart`}>
            <img src={cart} alt="cart" />
          </Link>
          <img src={avatar} alt="avatar" />
        </FlexCenter>
      </FlexBetween>
    </>
  );
};

export default Top;
