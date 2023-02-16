import React from 'react'

//components
import Like from './components/Like';
import DescripSec from './components/DescripSec';

//style
import { GridDiv } from '../../../Cart/sections/HeroCart/style';
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
