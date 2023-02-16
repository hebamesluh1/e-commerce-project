import styled from "styled-components";

export const BoxWrapper = styled.div`
border: 1px solid #E0E0E0;
position:relative;
color:${props=>props.theme.palette.contentColor};
.body-box{
    padding:20px;
}
.icon{
    position:absolute;
    background: #D1E7FF;
    padding: 10px;
    border-radius: 50%;
    bottom: 25%;
    right: 10%;
    border: 1px solid ${props=>props.theme.palette.sectionBackground};
}
`