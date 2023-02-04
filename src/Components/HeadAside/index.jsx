import React from 'react'
import arrow from '../../Assets/image/ListStore/other/expand_less.png';
import  styled from 'styled-components';
import { FlexBetween } from '../../Global/components';

const ArrowHead = styled(FlexBetween)`
    border-top:1px solid #e0e0e0;
    padding:20px 0;
    img{
        cursor:pointer;
    }
`
const H4 = styled.h4`
    ${props=>props.theme.fonts.h6};
    color: ${props=>props.theme.palette.contentColor};
`
export default function HeadAside({title}) {
    return (
        <ArrowHead>
            <H4>{title}</H4>
            <img src={arrow} alt="arrow" />
        </ArrowHead>
    )
}
