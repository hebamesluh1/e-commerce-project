import React from 'react'
import Card from './components/Card'
import { FlexDiv } from '../../../../Global/components';

//images
import img1 from '../../../../Assets/image/cart/icon/icon.png';
import img2 from '../../../../Assets/image/cart/icon/icon (1).png';
import img3 from '../../../../Assets/image/cart/icon/icon (2).png';


export default function Note() {
    return (
        <FlexDiv style={{margin:'30px 0'}}>
            <Card img={img1} title="Secure payment"/>
            <Card img={img2} title="Customer support"/>
            <Card img={img3} title="Free delivery"/>
        </FlexDiv>
    )
}
