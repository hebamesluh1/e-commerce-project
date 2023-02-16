import React from 'react'
import Payment from './components/Payment'
import Shopping from './components/Shopping'
import { GridDiv } from './style';

export default function HeroCart() {
    return (
        <GridDiv>
            <Shopping />
            <Payment />
        </GridDiv>
    )
}
