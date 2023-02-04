import styled from "styled-components";

export const P = styled.p`
font-weight: 400;
font-size: 16px;
line-height: 24px;
letter-spacing: -0.2px;
color: ${props=>props.color ==='gray'?'#8B96A5;':'#606060'};
margin:10px 0;
`