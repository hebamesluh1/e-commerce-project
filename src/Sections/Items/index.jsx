import React from 'react'
import {Container, FlexBetween} from '../../Global/components'
import ItemBox from '../../Components/ItemsBox'
import { H2 } from '../../Components/Typography'

//image
import img1 from '../../Assets/image/main/items/01.png';
import img2 from '../../Assets/image/main/items/02.png';
import img3 from '../../Assets/image/main/items/03.png';
import img4 from '../../Assets/image/main/items/04.png';
import img5 from '../../Assets/image/main/items/05.png';
import img6 from '../../Assets/image/main/items/06.png';
import img7 from '../../Assets/image/main/items/07.png';
import img8 from '../../Assets/image/main/items/11.png';
import img9 from '../../Assets/image/main/items/33.png';
import styled from 'styled-components';


const ItemWrapper = styled(FlexBetween)`
    margin:35px 0;
    margin-bottom:100px;
`
export default function Items() {
    return (
        <>
            <Container>
            <H2 title="Recommended items"/>
            <ItemWrapper>
                <div>
                <ItemBox img={img5} price="10.30" body="T-shirts with multiple colors, for men"/>
                <ItemBox img={img4} price="9.99" body="Canon camera black, 100x zoom"/>
                </div>
                <div>
                <ItemBox img={img3} price="10.30" body="Jeans shorts for men blue color"/>
                <ItemBox img={img2} price="8.99" body="Headset for gaming with mic"/>
                </div>
                <div>
                <ItemBox img={img1} price="12.50" body="Brown winter coat medium size"/>
                <ItemBox img={img7} price="10.30" body="Smartwatch silver color modern"/>
                </div>
                <div>
                <ItemBox img={img6} price="34.00" body="Jeans bag for travel for men"/>
                <ItemBox img={img9} price="10.30" body="Blue wallet for men leather metarfial"/>
                </div>
                <div>
                <ItemBox img={img7} price="99.00" body="Leather wallet"/>
                <ItemBox img={img8} price="80.95" body="Jeans bag for travel for men"/>
                </div>
            </ItemWrapper>
            </Container>
        </>
    )
}
