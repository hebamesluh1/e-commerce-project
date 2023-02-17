import styled from "styled-components";
export const InputSearch = styled.input`
  background: ${(props) => props.theme.palette.sectionBackground};
  border: 1px solid ${(props) => props.theme.palette.gray300};
  border-radius: 6px;
  padding: 0.5rem 2rem;

  &::placeholder {
    color: ${(props) => props.theme.palette.gray500};
    font-size: 16px;
  }
`;
export const ImgStyled = styled.img`
  position: absolute;
  top: 15%;
  left: 19%;
  @media (max-width: 920px) {
    display: none;
  }
`;
export const ButtonStyled = styled.button`
  background: linear-gradient(180deg, #127fff 0%, #0067ff 100%);
  border: none;
  border-radius: 6px;
  color: ${(props) => props.theme.palette.sectionBackground};
  padding: 10px 20px;
  margin-left: 10px;
`;
export const TopFooterStyled = styled.div`
  margin: auto;
  width: fit-content;
  text-align: center;
`;
export const HeaderStyled = styled.h2`
  ${(props) => props.theme.fonts.h5}
`;
export const BodyStyled = styled.p`
  ${(props) => props.theme.fonts.body1};
  color: ${(props) => props.theme.palette.gray800};
  margin-bottom: 21px;
`;
export const TopWrapper = styled.div`
  background: ${(props) => props.theme.palette.gray200};
  padding: 2.3rem;
`;
