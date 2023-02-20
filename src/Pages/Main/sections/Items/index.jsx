import React from 'react'
import {Container, FlexBetween} from '../../../../Global/components'
import ItemBox from './components/ItemsBox'
import { H2 } from '../../../../Components/Typography'

//image
import img1 from '../../../../Assets/image/main/items/01.png';
import img2 from '../../../../Assets/image/main/items/02.png';
import img3 from '../../../../Assets/image/main/items/03.png';
import img4 from '../../../../Assets/image/main/items/04.png';
import img5 from '../../../../Assets/image/main/items/05.png';
import img6 from '../../../../Assets/image/main/items/06.png';
import img7 from '../../../../Assets/image/main/items/07.png';
import img9 from '../../../../Assets/image/main/items/33.png';
import styled from 'styled-components';


const ItemWrapper = styled(FlexBetween)`
    margin:35px 0;
    margin-bottom:100px;
    display: flex;
    gap: 5%;
    flex-wrap: wrap;
    align-items: center;
`
export default function Items() {
    return (
        <>
            <Container>
            <H2 title="Recommended items"/>
            <ItemWrapper>
                <ItemBox img={img5} price="10.30" body="T-shirts with multiple colors, for men"/>
                <ItemBox img={img4} price="9.99" body="Canon camera black, 100x zoom"/>
                <ItemBox img={img3} price="10.30" body="Jeans shorts for men blue color"/>
                <ItemBox img={img2} price="8.99" body="Headset for gaming with mic"/>
                <ItemBox img={img1} price="12.50" body="Brown winter coat medium size"/>
                <ItemBox img={img7} price="10.30" body="Smartwatch silver color modern"/>
                <ItemBox img={img6} price="34.00" body="Jeans bag for travel for men"/>
                <ItemBox img={img9} price="10.30" body="Blue wallet for men leather metarfial"/>
                
            </ItemWrapper>
            </Container>
        </>
    )
}
