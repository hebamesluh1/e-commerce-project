import React from 'react'



import { DescriptionStyle} from '../../BodySection/Card/style';
import styled from 'styled-components';
import {H4Styling,FlexBetween} from '../../../../../../../Global/components';
import AddBtn from '../../BodySection/Card/AddBtn';



const WrapperCard2 = styled.div`
    border: 1px solid #E3E8EE;
    border-radius: 6px;
    background:${props=>props.theme.palette.sectionBackground};
    margin-bottom:20px;
    width: 250px;
    .image{
        display:flex;
        justify-content:center;
        padding:10px;
        border-bottom:1px solid ${props=>props.theme.palette.gray300};
    }
`
const ContentWrapper =styled.div`
    padding:10px;
`
export default function Card2({img , discount , rateImg ,rate,price,products}) {
    return (
        <WrapperCard2>
            <div className='image'>
            <img src={img} alt="" />
            </div>
            <ContentWrapper>
                <FlexBetween>
                    <div>
                    <H4Styling>${price} <del>${discount}</del></H4Styling>
                    <img src={rateImg} alt="" /><span style={{lineHeight: "19px",color: "#FF9017"}}>
                        {rate}
                    </span>
                    </div>
                    <AddBtn products={products}/>
                </FlexBetween>
                <DescriptionStyle>
                GoPro HERO6 4K Action Camera - Black
                </DescriptionStyle>
            </ContentWrapper>
        </WrapperCard2>
    )
}
