import React from 'react'

//images
import pay1 from '../../../../../../Assets/image/cart/pay/1.png';
import pay2 from '../../../../../../Assets/image/cart/pay/2.png';
import pay3 from '../../../../../../Assets/image/cart/pay/3.png';
import pay4 from '../../../../../../Assets/image/cart/pay/4.png';
import pay5 from '../../../../../../Assets/image/cart/pay/5.png';

//style
import { BorderWrapper,P,InputBox,Btn,InputBorder,Total,CheckoutBtn,Style } from './style';
import {FlexBetween} from '../../../../../../Global/components';

import { useProductContext } from './../../../../../../Context/productContext';

export default function Payment() {
    const {total,totalBeforeDiscount,totalDiscount}=useProductContext();
    return (
        <Style>
            <BorderWrapper>
                <P>Have a coupon?</P>
                <InputBorder><InputBox type="text" placeholder='Add coupon'/> <Btn>Apply</Btn></InputBorder>
            </BorderWrapper>
            <BorderWrapper style={{boxShadow:" 0px 4px 10px rgba(56, 56, 56, 0.1)",margin:'20px 0'}}>
                <div style={{borderBottom:'1px solid #E4E4E4'}}>
                    <FlexBetween><P>Subtotal:</P> <span>${totalBeforeDiscount}</span></FlexBetween>
                    <FlexBetween><P>Discount:</P> <span style={{color:'#FA3434'}}>-${totalDiscount}</span></FlexBetween>
                    <FlexBetween><P>Tax:</P> <span style={{color:'#00B517'}}>+${total>0?"14":"0"}</span></FlexBetween>
                </div>
                <div>
                <FlexBetween><P style={{fontWeight:'600'}}>Total:</P> <Total>${total>0?14+total:0}</Total></FlexBetween>
                <CheckoutBtn>Checkout</CheckoutBtn>
                </div>
                <FlexBetween>
                    <img src={pay1} alt="" />
                    <img src={pay2} alt="" />
                    <img src={pay3} alt="" />
                    <img src={pay4} alt="" />
                    <img src={pay5} alt="" />
                </FlexBetween>
            </BorderWrapper>
        </Style>
    )
}
