import React from 'react';
import styled from 'styled-components';
import { P } from './style';
const ImgBorder = styled.div`
    background: #EEEEEE;
    border-radius: 6px;
`
const DivWrapper = styled.div`
    margin:10px 0;
`
export default function Card6({img}) {
    return (
        <div>
            <ImgBorder><img src={img} alt="" /></ImgBorder>
            <DivWrapper>
                <P>Xiaomi Redmi 8 Original </P>
                <P color='gray'>$32.00-$40.00</P>
            </DivWrapper>
        </div>
    )
}
