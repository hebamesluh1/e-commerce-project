import React from 'react'

//style
import { Wrapper } from '../../../Cart/sections/SavedLater/style';
import {SpaceContainer,FlexBetween} from '../../../../Global/components';

//images
import img1 from '../../../../Assets/image/electronics2/card/download.png';
import img2 from '../../../../Assets/image/electronics2/card/download (1).png';
import img3 from '../../../../Assets/image/electronics2/card/download (2).png';
import img4 from '../../../../Assets/image/electronics2/card/download (3).png';
import img5 from '../../../../Assets/image/electronics2/card/download (4).png';
import img6 from '../../../../Assets/image/electronics2/card/download (5).png';


//components
import Card from './Card';

export default function RelatedProduct() {
    return (
        <SpaceContainer>
            <Wrapper>
                    <h4>Related Products</h4>
                    <FlexBetween style={{padding:'20px 0'}}>
                    <Card img={img1}/>
                    <Card img={img2}/>
                    <Card img={img3}/>
                    <Card img={img4}/>
                    <Card img={img5}/>
                    <Card img={img6}/>
                </FlexBetween>
            </Wrapper>
        </SpaceContainer>
    )
}
