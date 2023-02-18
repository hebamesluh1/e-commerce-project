import styled from "styled-components";

export const HeadStyle = styled.h3`
  ${(props) => props.theme.fonts.h3}
  color: ${(props) => props.theme.palette.sectionBackground};
  padding-bottom: 20px;
`;
export const BodyStyle = styled.p`
  ${(props) => props.theme.fonts.body1}
  color: ${(props) => props.theme.palette.sectionBackground};
`;
export const WrapperTitle = styled.div`
  padding: 20px;
  flex-basis: 40%;
  @media (max-width: 920px) {
    flex-basis: 100%;
  }
`;
