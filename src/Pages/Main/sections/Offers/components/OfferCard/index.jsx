import React from 'react'
import {OfferCardBox,OfferProduct,OfferDiscount} from './style'

export default function OfferCard(props) {
    return (
        <OfferCardBox>
        <img src={props.img} alt=" " />
        <OfferProduct>{props.product}</OfferProduct>
        <OfferDiscount>-{props.discount}</OfferDiscount>
        </OfferCardBox>
    );
}