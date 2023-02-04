import React from 'react'
import pay1 from '../../Assets/image/cart/pay/1.png';
import pay2 from '../../Assets/image/cart/pay/2.png';
import pay3 from '../../Assets/image/cart/pay/3.png';
import pay4 from '../../Assets/image/cart/pay/4.png';
import pay5 from '../../Assets/image/cart/pay/5.png';
import { BorderWrapper } from './style';
import styled from 'styled-components';
import { FlexDiv } from './../HeaderSection/style';

const P =styled.p`
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    color: #505050;
    padding:10px 0;
`
const InputBox = styled.input`
    background: #FFFFFF;
    border:none;
    border-right: 1px solid #E0E0E0;
    padding:10px;
    width:70%;
    &::placeholder{
        font-weight: 400;
        font-size: 16px;
        line-height: 19px;
        color: ${props=>props.theme.palette.gray500};
    }
`
const Btn = styled.button`
    background:transparent;
    padding:10px;
    border:none;
    color: #0D6EFD;
    cursor:pointer;
`
const InputBorder = styled.div`
    border: 1px solid #E0E0E0;
    border-radius:6px;
    margin:10px 0;
    display:flex;
    
`
const Total = styled.span`
    font-weight: 600;
    font-size: 20px;
    line-height: 28px;
    letter-spacing: -0.2px;
    color: #1C1C1C;
`
const CheckoutBtn = styled.button`
    background: #00B517;
    border-radius: 8px;
    width:100%;
    padding:10px;
    margin:20px 0;
    color:#fff;
    border:none;
    cursor:pointer;
`
export default function Payment() {
    return (
        <div>
            <BorderWrapper>
                <P>Have a coupon?</P>
                <InputBorder><InputBox type="text" placeholder='Add coupon'/> <Btn>Apply</Btn></InputBorder>
            </BorderWrapper>
            <BorderWrapper style={{boxShadow:" 0px 4px 10px rgba(56, 56, 56, 0.1)",margin:'20px 0'}}>
                <div style={{borderBottom:'1px solid #E4E4E4'}}>
                    <FlexDiv style={{justifyContent:'space-between'}}><P>Subtotal:</P> <span>$1403.97</span></FlexDiv>
                    <FlexDiv style={{justifyContent:'space-between'}}><P>Discount:</P> <span style={{color:'#FA3434'}}>-$60.00</span></FlexDiv>
                    <FlexDiv style={{justifyContent:'space-between'}}><P>Tax:</P> <span style={{color:'#00B517'}}>+$14.00</span></FlexDiv>
                </div>
                <div>
                <FlexDiv style={{justifyContent:'space-between'}}><P style={{fontWeight:'600'}}>Total:</P> <Total>$1357.97</Total></FlexDiv>
                <CheckoutBtn>Checkout</CheckoutBtn>
                </div>
                <FlexDiv style={{justifyContent:'space-between'}}>
                    <img src={pay1} alt="" />
                    <img src={pay2} alt="" />
                    <img src={pay3} alt="" />
                    <img src={pay4} alt="" />
                    <img src={pay5} alt="" />
                </FlexDiv>
            </BorderWrapper>
        </div>
    )
}
