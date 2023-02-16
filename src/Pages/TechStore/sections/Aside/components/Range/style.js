import styled from "styled-components";

export const RangeInput = styled.input`
    background: #AFD0FF;
    border-radius: 2px;
    width:100%;
`
export const ButtonRange = styled.button`
    width:100%;
    padding:10px;
    color: #0D6EFD;
    border:none;
    background:#fff;
    border: 1px solid #E3E8EE;
    /* shadow-sm */
    box-shadow: 0px 1px 2px rgba(56, 56, 56, 0.08);
    border-radius: 6px;
    font-size: 16px;
    font-weight: 500;
    line-height: 19px;
    letter-spacing: 0em;
    text-align: center;
    margin:10px 0;
`
export const InputRange = styled.input`
    border: 1px solid #E3E8EE;
    border-radius: 6px;
    background:${props=>props.theme.palette.sectionBackground};
    padding:10px;
    width:100%;
    &::placeholder{
        ${props=>props.theme.fonts.body1};
        color: ${props=>props.theme.palette.gray400};
    }
`