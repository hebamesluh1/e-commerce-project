import styled from "styled-components";

export const PartWrapper = styled.div`
    border: 1px solid #E0E0E0;
    display:flex;
    justify-content:space-between;
    width:25%;
    background:${props=>props.theme.palette.sectionBackground};
    @media(max-width:920px){
            justify-content: flex-start;
    width: fit-content;
    }
`
export const HeadPart = styled.h3`
    ${props=>props.theme.fonts.body1};
    color: ${props=>props.theme.palette.contentColor};
    padding:20px 0;
`
export const BodyPart = styled.p`
    font-weight: 400;
    font-size: 13px;
    line-height: 16px;
    color: ${props=>props.theme.palette.gray500};
`