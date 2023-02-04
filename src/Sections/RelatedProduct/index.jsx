import React from 'react'
import { Wrapper } from './../SavedLater/style';
import { FlexDiv } from './../../Components/HeaderSection/style';
import Card6 from './Card6';
import {SpaceContainer} from '../../Global/components';

import img1 from '../../Assets/image/electronics2/card/download.png';
import img2 from '../../Assets/image/electronics2/card/download (1).png';
import img3 from '../../Assets/image/electronics2/card/download (2).png';
import img4 from '../../Assets/image/electronics2/card/download (3).png';
import img5 from '../../Assets/image/electronics2/card/download (4).png';
import img6 from '../../Assets/image/electronics2/card/download (5).png';
export default function RelatedProduct() {
    return (
        <SpaceContainer>
            <Wrapper>
                    <h4>Related Products</h4>
                    <FlexDiv style={{justifyContent:'space-between', padding:'20px 0'}}>
                    <Card6 img={img1}/>
                    <Card6 img={img2}/>
                    <Card6 img={img3}/>
                    <Card6 img={img4}/>
                    <Card6 img={img5}/>
                    <Card6 img={img6}/>
                </FlexDiv>
            </Wrapper>
        </SpaceContainer>
    )
}
