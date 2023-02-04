import React from 'react'
import { FlexCenter } from '../../../Global/components';
import {P} from '../../../Sections/RelatedProduct/Card6/style';
import { BackgroundWhite } from '../../../Global/components';
import styled from 'styled-components';

const Wrapper = styled(FlexCenter)`
    gap:5%;
`
export default function Card7({img}) {
    return (
        <Wrapper>
            <BackgroundWhite><img src={img} alt="" /></BackgroundWhite>
            <div><P>Apple Watch Series Space Gray<span style={{display:'block',color:'#8B96A5'}}>$7.00-$99.50</span></P>
            </div>
        </Wrapper>
    )
}
