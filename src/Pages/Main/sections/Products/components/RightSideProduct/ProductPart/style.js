import styled from "styled-components";

export const PartWrapper = styled.div`
  border: 1px solid #e0e0e0;
  display: flex;
  justify-content: space-between;
  width: 25%;
  height:130px;
  background: ${(props) => props.theme.palette.sectionBackground};
  @media (max-width: 920px) {
    width: 100%;
    height: 130px;
    img{
      width:100%;
    }
  }
`;
export const HeadPart = styled.h3`
  ${(props) => props.theme.fonts.body1};
  color: ${(props) => props.theme.palette.contentColor};
  padding: 20px 0;
`;
export const BodyPart = styled.p`
  font-weight: 400;
  font-size: 13px;
  line-height: 16px;
  color: ${(props) => props.theme.palette.gray500};
`;
