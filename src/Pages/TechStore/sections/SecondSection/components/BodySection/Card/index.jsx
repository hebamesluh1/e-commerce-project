import React from 'react'

//images
import rate from '../../../../../../../Assets/image/ListStore/components/rating.png';
import cart from '../../../../../../../Assets/image/cart/card1/shopping_cart.png';

//style
import { FlexDiv } from '../../../../../../../Global/components';
import {CardWrapper,H5Styling,H4Styling,DescriptionStyle,Details,ImgBorder} from './style';


import {useCartContext} from '../../../../../../../Context/productContext';

export default function Card({title,img,discount,description}) {


    const cartContext = useCartContext();
    console.log('cart context test',cartContext);


    return (
        <CardWrapper>
            <div>
                <img src={img} alt="" />
            </div>
            <div>
            <FlexDiv style={{justifyContent:'space-between'}}>
                <H5Styling>{title}</H5Styling>
                <ImgBorder><img src={cart} alt="" /></ImgBorder>
                </FlexDiv>
                
                <H4Styling>$998.00 <del>{discount}</del></H4Styling>
            <div>
                <img src={rate} alt="" />
                <span style={{lineHeight: "19px",color: "#FF9017"}}>7.5</span>
                <span style={{lineHeight:" 19px",color:" #8B96A5",    padding: "0 10px"}}>154 orders</span>
                <span style={{
lineHeight: "19px",color:"#00B517"}}>Free Shipping</span>
            </div>
            <DescriptionStyle>{description}</DescriptionStyle>
            <Details href="/#">View details</Details>
            </div>
        </CardWrapper>
    )
}
