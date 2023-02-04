import React from 'react';
import flag from '../../Assets/image/footer/Flags.png';
import arrow from '../../Assets/image/footer/expand_less.png';
import {WrapperStyled } from '../MenuNav/style';
import styled  from 'styled-components';
import {Container} from '../../Global/components'
import { FlexCenter } from '../../Global/components';

const FooterStyled = styled.div`
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: -0.2px;
    color:${props=>props.theme.palette.gray800};
    background:${props=>props.theme.palette.gray200};
    padding:1.3rem 0;
`
export default function CopyRight() {
    return (
        <FooterStyled>
            <Container>
                <WrapperStyled>
                <div>© 2023 Ecommerce. </div>
                <FlexCenter style={{gap:'4px'}}> <img src={flag} alt="flag" /> English <img src={arrow} alt="arrow"/></FlexCenter>
                </WrapperStyled>
            </Container>
        </FooterStyled>
    )
}
