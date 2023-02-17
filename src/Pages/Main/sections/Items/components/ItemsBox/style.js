import styled from "styled-components";

export const ItemsWrapper =styled.div`
    background:${props=>props.theme.palette.sectionBackground};
    border:1px solid e0e0e0;
    padding:10px;
    height:310px;
    margin:20px 0;
    span{
        ${props=>props.theme.fonts.h6}
        color: ${props=>props.theme.palette.contentColor};
    }
    p{
        ${props=>props.theme.fonts.body1}
        color: ${props=>props.theme.palette.gray500};;
        width:150px;
    }
    img{
        width:100%;
    }
    @media(max-width:925px){
        width:40%;
    }
`