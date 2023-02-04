import React from 'react';
import styled from 'styled-components';


//styling
const HeadStyle = styled.h3`
    ${props=>props.theme.fonts.h3}
    color: ${props=>props.theme.palette.sectionBackground};
    padding-bottom:20px;
`
const BodyStyle = styled.p`
    ${props=>props.theme.fonts.body1}
    color: ${props=>props.theme.palette.sectionBackground};
`
const WrapperTitle = styled.div`
    padding:20px;
    flex-basis:40%
`
export default function SupplierTitle() {
    return (
        <WrapperTitle>
            <HeadStyle>An easy way to send requests to all suppliers</HeadStyle>
            <BodyStyle>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.</BodyStyle>
                </WrapperTitle>
    )
}
