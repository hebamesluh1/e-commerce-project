import React from 'react'
import styled from 'styled-components';
import { FlexDiv } from '../../HeaderSection/style';
const Wrapper = styled.div`
    display:flex;
    justify-content:space-between;
    border-bottom:1px solid #E3E8EE;
    .btn{
        margin:20px 0;
    }
    .product{
        padding: 20px 0;
    }
    .price{
        padding: 20px;
    }
    select{
        width:100%;
        border:1px solid #E3E8EE;
        padding:10px;
        border-radius:6px;
    }
`
const H5 = styled.h5`
    font-weight: 500;
    font-size: 16px;
    line-height: 22px;
    color: #1C1C1C;
`
const P = styled.p`
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: -0.2px;
    color: #8B96A5;
`
const Btn = styled.button`
    border: 1px solid #E3E8EE;
    box-shadow: 0px 1px 2px rgba(56, 56, 56, 0.08);
    border-radius: 6px;
    padding:7px;
    background:transparent;
    margin-right:10px;
    font-weight: 500;
    font-size: 13px;
    line-height: 16px;
    color: ${props =>props.color === 'red'?'#FA3434':' #0D6EFD'};
`
export default function Card5({img , price , quantity}) {
    return (
        <Wrapper>
            <FlexDiv style={{alignItems:'flex-start'}}>
                <img src={img} alt="" className='product'/>
                <div style={{padding:'20px'}}>
                    <H5>T-shirt with multiple colors , for men and lady</H5>
                    <P>Size :meduim , Color:blue , Material:Plastic</P>
                    <P>Seller:Artel Market</P>
                    <div className="btn">
                        <Btn color="red">Remove</Btn>
                        <Btn>Save for later</Btn>
                    </div>
                </div>
            </FlexDiv>
            <div className='price'>
                <H5>${price}</H5>
                <select>
                    <option value="Qty:9">Qty:{quantity}</option>
                </select>
            </div>
        </Wrapper>
    )
}
