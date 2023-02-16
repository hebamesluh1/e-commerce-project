import styled from "styled-components";
export const WrapperSuggestion = styled.div`
margin:10px;
display:flex;
gap:10px;
align-items:center;
flex-wrap: wrap;
span{
    color: ${props=>props.theme.palette.primary};
}
`
export const BoxSuggestion = styled.div`
display:flex;
align-items:center;
justify-content:space-between;
padding:5px;
border: 1px solid ${props=>props.theme.palette.primary};
border-radius: 5px;
background:${props=>props.theme.palette.sectionBackground};
p{
    margin-right:10px;
    color: #505050;
}
`