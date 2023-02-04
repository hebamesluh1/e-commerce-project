import React from 'react'
import BtnCart from '../BtnCart'
import Card from './Card'
import { BorderWrapper } from './../Payment/style';
import img1 from '../../Assets/image/cart/card2/img-group.png';
import img2 from '../../Assets/image/cart/card2/img-group (1).png';
import img3 from '../../Assets/image/cart/card2/img-group (2).png';

export default function Shopping() {
    return (
        <BorderWrapper>
            <Card img={img1} quantity="9" price="78.99"/>
            <Card img={img2} quantity="3" price="39.00"/>
            <Card img={img3} quantity="1" price="170.50"/>
            <BtnCart />
        </BorderWrapper>
    )
}
