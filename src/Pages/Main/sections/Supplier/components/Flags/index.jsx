import React from 'react';
import {H4} from '../../../../../../Components/Typography'
import styled from 'styled-components';
const FlagsWrapper =styled.div`
    display:flex;
    align-items:center;
    gap:20px;
`
const SpanStyled = styled.span`
    ${props=>props.theme.fonts.body1};
    color: ${props=>props.theme.palette.gray500};

`
export default function Flags({title,img,website}) {
    return (
        <FlagsWrapper>
            <div>
                <img src={img} alt="title"/>
            </div>
            <div>
                <H4 title={title}/>
                <SpanStyled>{website}</SpanStyled>
            </div>
        </FlagsWrapper>
    )
}
