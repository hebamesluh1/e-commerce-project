import styled from "styled-components";
export const Btn = styled.button`
    padding:10px;
    border-radius: 6px;
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
    margin-bottom:10px;
    width:${props=>props.width=== 'full'?'100%':''};
    ${props=>props.color ==='blue'?'background:#0D6EFD;border: 1px solid #0D6EFD; color:#fff':'color:#0D6EFD;background:#fff;border:1px solid #E3E8EE'};
    cursor:pointer;
`