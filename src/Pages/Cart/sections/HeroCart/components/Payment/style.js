import styled from "styled-components";

export const BorderWrapper = styled.div`
border: 1px solid #E3E8EE;
border-radius: 6px;
background:${props=>props.theme.palette.sectionBackground};
padding:10px;
`

export const P =styled.p`
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    color: #505050;
    padding:10px 0;
`
export const InputBox = styled.input`
    background: #FFFFFF;
    border:none;
    border-right: 1px solid #E0E0E0;
    padding:10px;
    width:70%;
    &::placeholder{
        font-weight: 400;
        font-size: 16px;
        line-height: 19px;
        color: ${props=>props.theme.palette.gray500};
    }
`
export const Btn = styled.button`
    background:transparent;
    padding:10px;
    border:none;
    color: #0D6EFD;
    cursor:pointer;
`
export const InputBorder = styled.div`
    border: 1px solid #E0E0E0;
    border-radius:6px;
    margin:10px 0;
    display:flex;
    
`
export const Total = styled.span`
    font-weight: 600;
    font-size: 20px;
    line-height: 28px;
    letter-spacing: -0.2px;
    color: #1C1C1C;
`
export const CheckoutBtn = styled.button`
    background: #00B517;
    border-radius: 8px;
    width:100%;
    padding:10px;
    margin:20px 0;
    color:#fff;
    border:none;
    cursor:pointer;
`
export const Style=styled.div`
@media (max-width: 920px) {
    display:none;
  }
`