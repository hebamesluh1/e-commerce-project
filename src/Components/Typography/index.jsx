import styled from "styled-components"
const H2Styled = styled.h2`
    ${props=>props.theme.fonts.h4}
    color:${props=>props.theme.palette.contentColor};
`
const H4Styled = styled.h4`
    ${props=>props.theme.fonts.body1};
    color:${props=>props.theme.palette.contentColor};
`
export const H2 =({title})=>{
    return(
        <H2Styled>{title}</H2Styled>
    )
}

export const H4 =({title})=>{
    return(
        <H4Styled>{title}</H4Styled>
    )
}