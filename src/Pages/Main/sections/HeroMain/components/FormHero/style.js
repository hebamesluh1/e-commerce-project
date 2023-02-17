import styled from "styled-components";

export const FormBox = styled.form`
  background: #e3f0ff;
  padding: 10px;
`;
export const Btn = styled.button`
  width: 100%;
  background: ${(props) =>
    !props.join
      ? "#fff; color:#0D6EFD;"
      : "linear-gradient(180deg, #127FFF 0%, #0067FF 100%);color:#fff"};
  border: none;
  border-radius: 6px;
  padding: 5px 0;
  margin-top: 10px;
  padding: 10px;
  cursor: pointer;
`;
export const Style = styled.div`
  p {
    ${(props) => props.theme.fonts.body1}
    color:${(props) => props.theme.palette.contentColor};
  }
  @media(max-width:920px){
    display:none;
  }
`;

export const Box = styled.div`
  background: ${(props) => (!props.orange ? "#55BDC4" : "#F38332")};
  padding: 50px 20px;
  border-radius: 6px;
  margin: 10px 0;
  color: #fff;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  height: 35%;
`;
