import React from 'react'
import { FlexDiv } from './../HeaderSection/style';
import styled from 'styled-components';
const H5 =styled.h5`
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: -0.2px;
    color: #1C1C1C;
`
const P = styled.p`
    font-size: 16px;
    line-height: 24px;
    letter-spacing: -0.2px;
    color: #A9ACB0;
`
export default function Card4({img,title}) {
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
