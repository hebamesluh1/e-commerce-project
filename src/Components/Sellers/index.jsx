import React from 'react'
import { BorderWrapper } from './../Payment/style';
import {P} from '../../Sections/RelatedProduct/Card6/style';
import img from '../../Assets/image/electronics2/part1/R.png';
import img1 from '../../Assets/image/electronics2/part1/Flags.png';
import img2 from '../../Assets/image/electronics2/part1/verified_user.png';
import img3 from '../../Assets/image/electronics2/part1/language.png';
import styled from 'styled-components';
import { FlexDiv } from './../HeaderSection/style';
import { Btn } from '../BtnCart/style';
import fav from '../../Assets/image/electronics2/part1/favorite_border.png';

const WrapperImg = styled.div`
    padding:10px;
    background: #C6F3F1;
    border-radius: 4px;
    border: 1px solid #C6F3F1;
    margin-right:10px;
`
const BorderTop =styled.div`
    border-top: 1px solid #E0E0E0;
`
export default function Sellers() {
    return (
        <div>
            <BorderWrapper>
                <FlexDiv>
                    <WrapperImg><img src={img} alt="" /></WrapperImg>
                    <P>Supplier <br /> Guanjoi Trading LLC</P>
                </FlexDiv>
                <BorderTop>
                    <FlexDiv style={{gap:'20px'}}><img src={img1} alt="" /><P>Germany, Berlin</P></FlexDiv>
                    <FlexDiv style={{gap:'20px'}}><img src={img2} alt="" /><P>Verified Seller</P></FlexDiv>
                    <FlexDiv style={{gap:'20px'}}><img src={img3} alt="" /><P>Worldwide shipping</P></FlexDiv>
                </BorderTop>
                <div>
                    <Btn color="blue" width="full">Send inquiry</Btn>
                    <Btn width="full">Seller's profile</Btn>
                </div>
            </BorderWrapper>
            <FlexDiv style={{justifyContent: "center"}}><img src={fav} alt="" /><P style={{color:" #0D6EFD"}}>Save for later</P></FlexDiv>
        </div>
    )
}
