import React from 'react'
import {Container} from '../../Global/components';

//components
import RightSideProduct from '../../Components/RightSideProduct/electronic';
import RightSideProductF from '../../Components/RightSideProduct/furniture';
import LiftSideProduct from './../../Components/LiftSideProduct';
import styled from 'styled-components';


//image
import cover1 from '../../Assets/image/main/furniture/cover2.png';
import cover2 from '../../Assets/image/main/electronics/cover1.png';

const ProductsWrapper=styled.div`
    display:flex;
    margin: 20px 0;
`
export default function Products() {
    return (
        <div>
            <Container>
                <ProductsWrapper>
                <LiftSideProduct cover={cover1} title="Home and outdoor"/>
                <RightSideProductF />
                </ProductsWrapper>
            </Container>
            <Container>
                <ProductsWrapper>
                <LiftSideProduct cover={cover2} title="Consumer electronics and gadgets"/>
                <RightSideProduct />
                </ProductsWrapper>
            </Container>
        </div>
        
    )
}
