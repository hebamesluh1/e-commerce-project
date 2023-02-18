import styled from "styled-components";
export const OffersSectionBox = styled.section`
  margin-top: 30px;
  background-color: ${(props) => props.theme.palette.sectionBackground};
  border: 1px solid ${(props) => props.theme.palette.gray300};
  border-radius: 6px;
`;

export const SectionDetails = styled.div`
  padding: 20px;
  min-width: 281px;
  border-right: 1px solid #e0e0e0;
  @media(max-width:920px){
    padding:10px;
    display:flex;
    justify-content:space-between;
    border:none;
`;
export const SectionNameH3 = styled.h3`
  font-weight: 600;
  font-size: 20px;
  line-height: 28px;
  letter-spacing: -0.2px;
  color: ${(props) => props.theme.palette.contentColor};
`;

export const SectionDescriptionP = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: ${(props) => props.theme.palette.gray500};
  margin-bottom: 18px;
`;

export const OffersBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: calc(100% - 281px);
  @media(max-width:920px){
    padding:10px;
    border:none;
    width:fit-content;
    justify-content:space-between;
`;
export const Flex = styled.div`
  display: flex;
  @media(max-width:920px){
    display:block;
`;
