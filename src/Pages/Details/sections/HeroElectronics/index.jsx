import React from 'react'

//components
import Show from './components/Show';
import Sellers from './components/Sellers';
import Details from './components/Details';


//style
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
