import React from 'react'
import Card3 from './Card3';
import img1 from '../../Assets/image/cart/card1/1.png';
import img2 from '../../Assets/image/cart/card1/2.png';
import img3 from '../../Assets/image/cart/card1/4.png';
import img4 from '../../Assets/image/cart/card1/5.png';
import { FlexDiv } from './../../Components/HeaderSection/style';
import {Wrapper} from './style'
export default function SavedLater() {
    return (
            <Wrapper>
                <h4>Saved for later</h4>
                <FlexDiv style={{justifyContent:'space-between', padding:'20px 0'}}>
                <Card3 img={img1}/>
                <Card3 img={img2}/>
                <Card3 img={img3}/>
                <Card3 img={img4}/>
                </FlexDiv>
            </Wrapper>
    )
}
