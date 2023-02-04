import React from 'react'
import { FlexDiv } from './../HeaderSection/style';
import arrow from '../../Assets/image/cart/card2/arrow_back.png';
import {Btn} from './style'
export default function BtnCart() {
    return (
            <FlexDiv style={{justifyContent:'space-between',margin:'20px 0'}}>
                <Btn color="blue"><FlexDiv><img src={arrow} alt="" /> Back to shop</FlexDiv></Btn>
                <Btn>Remove All</Btn>
            </FlexDiv>
    )
}
