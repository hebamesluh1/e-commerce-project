import React from 'react'
import  styled from 'styled-components';
import { FlexBetween } from '../../../../../../../Global/components';

const ArrowHead = styled(FlexBetween)`
    border-top:1px solid #e0e0e0;
    padding:20px 0;
    button{
        cursor:pointer;
        border:none;
        background:transparent;
    }
`
const H4 = styled.h4`
    ${props=>props.theme.fonts.h6};
    color: ${props=>props.theme.palette.contentColor};
`
export default function HeadAside({title,toggleShowList ,arrow}) {
    return (
        <ArrowHead>
            <H4>{title}</H4>
            <button onClick={toggleShowList}><img src={arrow} alt="arrow"/></button>
        </ArrowHead>
    )
}
