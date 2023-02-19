import styled from "styled-components";

export const ImgBorder = styled.div`
    background: #EEEEEE;
    border-radius: 6px;
    padding:30px;
`
export const H5 = styled.h5`
    font-weight: 600;
    font-size: 18px;
    line-height: 22px;
    color: #1C1C1C;
`
export const DivWrapper = styled.div`
    margin:10px 0;
`
export const P = styled.p`
    ${props=>props.theme.fonts.body1}
    color:${props=>props.theme.palette.gray800};
    margin:20px 0;
    width:180px;
    @media(max-width:920px){
        display:none;
    }
`
export const BtnCart = styled.button`
    display:flex;
    align-items:center;
    padding:5px 10px;
    color:${props=>props.theme.palette.primary};
    background:transparent;
    border: 1px solid ${props=>props.theme.palette.gray300};
    border-radius: 6px;
    width:55%;
    img{
        margin-right:10px;
    }
    @media(max-width:920px){
        width:100%;
    }

`