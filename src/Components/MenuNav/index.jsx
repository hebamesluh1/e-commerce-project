import React from 'react';
import { Link } from 'react-router-dom';


//image
import menu from '../../Assets/image/header/menu.png';
import arrow from '../../Assets/image/header/expand_more.png';
import flag from '../../Assets/image/header/Property 1=DE.png';

//style
import {Container} from '../../Global/components';
import {WrapperStyled,UlStyled,LiStyled}from './style';
import { FlexCenter } from './../../Global/components';

//component
import Select from '../Select';



export default function MenuNav() {
    return (
        <Container>
            <WrapperStyled>
                <UlStyled>
                    <LiStyled><Link to="/#">
                        <FlexCenter>
                        <img src={menu} alt="menu" /> All Category
                        </FlexCenter>
                        </Link></LiStyled>
                    <LiStyled><Link to="/#">Hot offers</Link></LiStyled>
                    <LiStyled><Link to="/#">Gift boxes</Link></LiStyled>
                    <LiStyled><Link to="/#">Projects</Link></LiStyled>
                    <LiStyled><Link to="/#">Menu item</Link></LiStyled>
                    <LiStyled>
                        <Select value="help1"/>
                    </LiStyled>
                </UlStyled>
                <UlStyled>
                    <LiStyled>
                        <Select value="English,USD" value2="Arabic,Palestine" value3='chinese'/>
                    </LiStyled>
                    <li>
                        <FlexCenter>Ship to <img src={flag} alt="flag" style={{margin:" 0 5px"}}/> <img src={arrow} alt="arrow" /></FlexCenter>
                    </li>
                </UlStyled>
            </WrapperStyled>
        </Container>
    )
}
