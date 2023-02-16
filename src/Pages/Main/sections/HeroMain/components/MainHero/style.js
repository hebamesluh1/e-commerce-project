import styled from "styled-components";
import cover from '../../../../../../Assets/image/main/another/cover.png';


export const Style = styled.div`
    background-image:Url(${cover});
    background-size: cover;
    background-repeat:no-repeat;
`


export const WrapperItems = styled.div`
    padding:50px 70px;
`
export const HeadHero = styled.h2`
    ${props=>props.theme.fonts.h4};
    color: ${props=>props.theme.palette.contentColor};
`
export const HeadHero2= styled.h1`
    ${props=>props.theme.fonts.h3};
    color: ${props=>props.theme.palette.contentColor};
`
export const Button = styled.button`
    background: ${props=>props.theme.palette.sectionBackground};
    border-radius: 6px;
    color:${props=>props.theme.palette.contentColor};
    border:none;
    padding:10px 20px;
    ${props=>props.theme.fonts.h6}
    margin-top:20px;
    cursor:pointer;
    &:hover{
        opacity:.7;
    }
`