import React from 'react'
import check from '../../../../../../../Assets/image/electronics2/other/check.png';
import { P } from '../../../../RelatedProduct/Card/style';
import styled from 'styled-components';
const WrapperCheck = styled.div`
    display:flex;
    align-items:center;
    img{
        margin-right:10px;
    }
`
export default function Check() {
    return (
        <WrapperCheck>
            <img src={check} alt=""/>
            <P>Some great feature name here</P>
        </WrapperCheck>
    )
}
