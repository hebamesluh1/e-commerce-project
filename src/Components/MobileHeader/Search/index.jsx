import React from "react";
import search from "../../../Assets/image/mobile/search.png";
import styled from "styled-components";

const Style = styled.div`
  position: relative;
  margin-top:30px;
  input {
    background: #f7fafc;
    border: 1px solid #e3e8ee;
    border-radius: 6px;
    padding: 10px 50px;
    width: 100%;
  }
  .img {
    position: absolute;
    top: 10px;
    left: 10px;
  }
`;
export const Search = () => {
  return (
    <Style>
      <div className="img">
        <img src={search} alt="search" />
      </div>
      <input type="search" placeholder="Search" />
    </Style>
  );
};
