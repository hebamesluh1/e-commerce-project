import React from 'react'

import {ImgBorder,H5,DivWrapper,P} from './style';


export default function Card3({img}) {
    return (
        <div>
            <ImgBorder><img src={img} alt="" width="100%"/></ImgBorder>
            <DivWrapper>
                <H5>$99.50</H5>
                <P>GoPro HERo6 4K Action Camera-Black</P>
            </DivWrapper>
        </div>
    )
}
