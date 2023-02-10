import styled from "styled-components";

export const SearchInputStyled = styled.input`
    padding: 11px 5px 10px 10px;
    outline: none;
    border:none;
    width: 420px;
    background:transparent;
    &::placeholder {
        font-weight: 400;
        font-size: 16px;
        color: #8b96a5;
    }
`;

export const SearchFormStyled = styled.form`
    display: ${props=>!props.show?"flex":"none"};
    align-items: center;
    border: 2px solid #0d6efd;
    border-radius: 8px;
    overflow: hidden;
    width: 635px;
    height:fit-content;
`;


export const SearchSubmitStyled = styled.button`
    background: linear-gradient(180deg, #127fff 0%, #0067ff 100%);
    padding: 12px 24px;
    border: none;
    cursor: pointer;
    font-size: 15px;
    font-weight: 500;
    color: #fff;
`;


export const SearchSelectStyled = styled.select`
    padding: 11px 5px 10px 10px;
    border-radius: 0;
    border: none;
    border-left: 2px solid #0d6efd;
    color: ${props=>props.theme.palette.contentColor};
    font-size: 16px;
    cursor: pointer;
    width:144px;
    background:transparent;
    &:focus {
        outline: none;
    }
`;