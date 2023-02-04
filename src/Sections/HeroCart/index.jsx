import React from 'react'
import Payment from '../../Components/Payment'
import Shopping from '../../Components/Shopping'
import { GridDiv } from './style';

export default function HeroCart() {
    return (
        <GridDiv>
            <Shopping />
            <Payment />
        </GridDiv>
    )
}
