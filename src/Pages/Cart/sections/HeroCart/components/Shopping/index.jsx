import React from 'react'
import BtnCart from './components/BtnCart'
import Card from './components/Card'
import { BorderWrapper } from '../Payment/style';

import img1 from '../../../../../../Assets/image/cart/card2/img-group.png';
import img2 from '../../../../../../Assets/image/cart/card2/img-group (1).png';
import img3 from '../../../../../../Assets/image/cart/card2/img-group (2).png';


export default function Shopping() {
    return (
        <BorderWrapper style={{gap: '20px'}}>
            <Card img={img1}  price="78.99"/>
            <Card img={img2}  price="39.00"/>
            <Card img={img3}  price="170.50"/>
            <BtnCart />
        </BorderWrapper>
    )
}