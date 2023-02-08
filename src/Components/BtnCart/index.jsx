import React from 'react'
import { FlexDiv } from './../HeaderSection/style';
import arrow from '../../Assets/image/cart/card2/arrow_back.png';
import {Btn} from './style'
import { useNavigate } from 'react-router-dom';
import { PATHS } from './../../routes/index';
export default function BtnCart() {
    const navigate = useNavigate();
    return (
            <FlexDiv style={{justifyContent:'space-between',margin:'20px 0'}}>
                <Btn color="blue" onClick={()=>navigate(`${PATHS.HOME}`)}><FlexDiv><img src={arrow} alt="" /> Back to shop</FlexDiv></Btn>
                <Btn>Remove All</Btn>
            </FlexDiv>
    )
}
