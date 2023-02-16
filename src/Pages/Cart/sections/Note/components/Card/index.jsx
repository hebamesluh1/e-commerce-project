import React from 'react'
import { FlexDiv } from '../../../../../../Global/components';

import styled from 'styled-components';
const H5 =styled.h5`
    ${props=>props.theme.fonts.body1}
    color: ${props=>props.theme.palette.contentColor};
`
const P = styled.p`
    ${props=>props.theme.fonts.body1}
    color: #A9ACB0;
`
export default function Card({img,title}) {
    return (
        <FlexDiv style={{gap:"10px",marginRight:'30px'}}>
            <img src={img} alt="" />
            <div>
                <H5>{title}</H5>
                <P>Have you ever finally just</P>
            </div>
        </FlexDiv>
    )
}
