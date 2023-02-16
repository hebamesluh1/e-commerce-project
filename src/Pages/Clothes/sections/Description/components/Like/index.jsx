import React from 'react'
import Card from './Card';
import {BackgroundWhite} from '../../../../../../Global/components'

import img1 from '../../../../../../Assets/image/electronics2/card1/011.png';
import img2 from '../../../../../../Assets/image/electronics2/card1/02.png';
import img3 from '../../../../../../Assets/image/electronics2/card1/03.png';
import img4 from '../../../../../../Assets/image/electronics2/card1/05.png';
import styled  from 'styled-components';


const Wrapper = styled(BackgroundWhite)`
    padding:20px;
`
export default function Like() {
    return (
        <Wrapper>
            <h5>You may like</h5>
            <Card img={img1}/>
            <Card img={img4}/>
            <Card img={img3}/>
            <Card img={img2}/>
            <Card img={img4}/>
        </Wrapper>
    )
}
