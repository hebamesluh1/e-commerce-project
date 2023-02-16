import styled from "styled-components";

export const FormStyle = styled.div`
    padding:10px;
    background:${props=>props.theme.palette.sectionBackground};
    box-shadow:${props=>props.theme.shadow.md};
    border-radius: 6px;
    padding:20px;
    width:100%;
`
export const HeadFormStyle = styled.h2`
    ${props=>props.theme.fonts.h5}
    color: ${props=>props.theme.palette.contentColor};
`
export const InputStyled = styled.input`
    width: 100%;
    padding:10px;
    border: 1px solid ${props=>props.theme.palette.gray300};
    border-radius: 6px;
    background: transparent;
    &::placeholder{
        ${props=>props.theme.fonts.body1}
        color: ${props=>props.theme.palette.gray500};
    }
    margin:20px 0;
`
export const TextArea = styled.textarea`
    width: 100%;
    padding:10px;
    border: 1px solid ${props=>props.theme.palette.gray300};
    border-radius: 6px;
    background: transparent;
    &::placeholder{
        ${props=>props.theme.fonts.body1}
        color: ${props=>props.theme.palette.gray500};
    }
`
export const Select = styled.select`
    width: 20%;
    padding:10px;
    height:100%;
    border: 1px solid ${props=>props.theme.palette.gray300};
    border-radius: 6px;
    margin:20px;
    background: transparent;
    color: ${props=>props.theme.palette.gray500};
    &::placeholder{
        ${props=>props.theme.fonts.body1}
    }
`