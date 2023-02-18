import React from 'react'
import ProductPart from './ProductPart';
import styled  from 'styled-components';

//image
import F1 from '../../../../../../Assets/image/main/electronics/01.png';
import F2 from '../../../../../../Assets/image/main/electronics/02.png';
import F3 from '../../../../../../Assets/image/main/electronics/03.png';
import F4 from '../../../../../../Assets/image/main/electronics/04.png';
import F5 from '../../../../../../Assets/image/main/electronics/05.png';
import F6 from '../../../../../../Assets/image/main/electronics/06.png';
import F7 from '../../../../../../Assets/image/main/electronics/07.png';
import F8 from '../../../../../../Assets/image/main/electronics/10.png';


//some styling
const ProductWrapper = styled.div`
    display:flex;
    flex-basis:83%;
    flex-wrap:wrap;
`

export default function RightSideProductF() {
    return (
        <ProductWrapper>
                <ProductPart title="Smart watches" body="19" img={F3}/>
                <ProductPart title="Gaming set" body="35" img={F6}/>
                <ProductPart title="Cameras" body="89" img={F5}/>
                <ProductPart title="Laptop & PC" body="340" img={F4}/>
                <ProductPart title="Headphones" body="10" img={F2}/>
                <ProductPart title="Smartphones" body="19" img={F7}/>
                <ProductPart title="Smart watches" body="90" img={F1}/>
                <ProductPart title="Electric Kattle" body="240" img={F8}/>
        </ProductWrapper>
    )
}
