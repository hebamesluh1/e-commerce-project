import React from 'react'
import fav from '../../../Assets/image/electronics1/favorite_border.png';
import cart from '../../../Assets/image/cart/card1/shopping_cart.png'
import { DescriptionStyle, H4Styling ,ImgBorder} from '../../Card/style';
import styled from 'styled-components';
import { FlexDiv } from '../../HeaderSection/style';

const WrapperCard2 = styled.div`
    border: 1px solid #E3E8EE;
    border-radius: 6px;
    background:${props=>props.theme.palette.sectionBackground};
    margin-bottom:20px;
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
export default function Card2({img , discount , rateImg ,rate}) {
    return (
        <WrapperCard2>
            <div className='image'>
            <img src={img} alt="" />
            </div>
            <ContentWrapper>
                <FlexDiv style={{justifyContent:'space-between'}}>
                    <div>
                    <H4Styling>$99.50 <del>{discount}</del></H4Styling>
                    <img src={rateImg} alt="" /><span style={{lineHeight: "19px",color: "#FF9017"}}>
                        {rate}
                    </span>
                    </div>
                    <ImgBorder>
                        <img src={cart} alt="" />
                    </ImgBorder>
                </FlexDiv>
                <DescriptionStyle>
                GoPro HERO6 4K Action Camera - Black
                </DescriptionStyle>
            </ContentWrapper>
        </WrapperCard2>
    )
}
