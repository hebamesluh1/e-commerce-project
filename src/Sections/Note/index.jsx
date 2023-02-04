import React from 'react'
import Card4 from '../../Components/Card4'
import { FlexDiv } from './../../Components/HeaderSection/style';
import img1 from '../../Assets/image/cart/icon/icon.png';
import img2 from '../../Assets/image/cart/icon/icon (1).png';
import img3 from '../../Assets/image/cart/icon/icon (2).png';
export default function Note() {
    return (
        <FlexDiv style={{margin:'30px 0'}}>
            <Card4 img={img1} title="Secure payment"/>
            <Card4 img={img2} title="Customer support"/>
            <Card4 img={img3} title="Free delivery"/>
        </FlexDiv>
    )
}
