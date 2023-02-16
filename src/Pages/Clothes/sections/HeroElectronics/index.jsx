import React from 'react'

import Show from '../../../../Components/Show';
import Sellers from '../../../../Components/Sellers';
import Details from '../../../../Components/Details';

import  styled  from 'styled-components';
import { FlexBetween ,SpaceContainer,BackgroundWhite} from '../../../../Global/components';


const FlexStart = styled(FlexBetween)`
    align-items:flex-start;
    padding:20px;
    gap: 20px;
`
export default function HeroElectronics() {
    return (
        <SpaceContainer>
            <BackgroundWhite>
                <FlexStart>
                <Show />
                <Details/>
                <Sellers />
                </FlexStart>
            </BackgroundWhite>
        </SpaceContainer>
    )
}
