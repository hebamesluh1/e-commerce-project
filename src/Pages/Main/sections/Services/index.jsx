import React from 'react'
import {Container, FlexBetween} from '../../../../Global/components';
import  styled  from 'styled-components';

//components
import BoxServices from './components/BoxServices';
import { H2 } from '../../../../Components/Typography';

//image
import mask1 from '../../../../Assets/image/main/services/Mask group.png';
import mask2 from '../../../../Assets/image/main/services/Mask group (1).png';
import mask3 from '../../../../Assets/image/main/services/Mask group (2).png';
import mask4 from '../../../../Assets/image/main/services/Mask group (3).png';
import icon from '../../../../Assets/image/main/services/search.png';
import icon1 from '../../../../Assets/image/main/services/inventory_2.png';
import icon2 from '../../../../Assets/image/main/services/send.png';
import icon3 from '../../../../Assets/image/main/services/security.png';


//some styling
const BoxWrapper = styled(FlexBetween)`
    padding: 20px 0;
    margin-bottom: 20px;
    flex-wrap:wrap;
    @media(max-width:925px){
        justify-content: center;
        gap:50px;
    }
`
export default function Services() {
    return (
        <div>
            <Container>
                <H2 title="Our extra services"/>
                <BoxWrapper>

                <BoxServices bg={mask1} body="Source from Industry Hubs" icon={icon}/>
                <BoxServices bg={mask2} body="Customize Your Products" icon={icon1}/>
                <BoxServices bg={mask3} body="Fast,reliable shiping by ocean or air" icon={icon2}/>
                <BoxServices bg={mask4} body="Product monitoring and inspection" icon={icon3}/>
                </BoxWrapper>
            </Container>
        </div>
    )
}
