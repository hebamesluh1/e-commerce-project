import React from 'react'
import cart from '../../../Assets/image/cart/card1/shopping_cart.png';
import styled from 'styled-components';

const ImgBorder = styled.div`
    background: #EEEEEE;
    border-radius: 6px;
    padding:30px;
`
const H5 = styled.h5`
    font-weight: 600;
    font-size: 18px;
    line-height: 22px;
    color: #1C1C1C;
`
const DivWrapper = styled.div`
    margin:10px 0;
`
const P = styled.p`
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: -0.2px;
    color: #606060;
    margin:20px 0;
    width:180px;
`
const BtnCart = styled.button`
    display:flex;
    align-items:center;
    padding:5px 10px;
    color:#0D6EFD;
    background:transparent;
    border: 1px solid #E3E8EE;
    border-radius: 6px;
    width:55%;
    img{
        margin-right:10px;
    }

`
export default function Card3({img}) {
    return (
        <div>
            <ImgBorder><img src={img} alt="" /></ImgBorder>
            <DivWrapper>
                <H5>$99.50</H5>
                <P>GoPro HERo6 4K Action Camera-Black</P>
                <BtnCart><img src={cart} alt="" /> Move to cart </BtnCart>
            </DivWrapper>
        </div>
    )
}
