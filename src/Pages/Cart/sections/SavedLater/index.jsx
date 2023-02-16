import React from 'react'
import Card from './Card';
import img1 from '../../../../Assets/image/cart/card1/1.png';
import img2 from '../../../../Assets/image/cart/card1/2.png';
import img3 from '../../../../Assets/image/cart/card1/4.png';
import img4 from '../../../../Assets/image/cart/card1/5.png';
import {Wrapper} from './style'
import { FlexBetween } from '../../../../Global/components';
export default function SavedLater() {
    return (
            <Wrapper>
                <h4>Saved for later</h4>
                <FlexBetween style={{padding:'20px 0'}}>
                <Card img={img1}/>
                <Card img={img2}/>
                <Card img={img3}/>
                <Card img={img4}/>
                </FlexBetween>
            </Wrapper>
    )
}
