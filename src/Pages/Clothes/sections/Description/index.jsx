import React from 'react'
import Like from '../../../../Components/Like';
import { GridDiv } from './../HeroCart/style';
import DescripSec from '../../../../Components/DescripSec/index';
import {SpaceContainer} from '../../../../Global/components';

export default function Description() {
    return (
        <SpaceContainer>
                <GridDiv>
                <DescripSec />
                <Like/>
                </GridDiv>
        </SpaceContainer>
        
    )
}
