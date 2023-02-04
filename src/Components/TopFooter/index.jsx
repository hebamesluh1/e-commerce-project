import React from 'react'
import email from '../../Assets/image/footer/email.png';
import {Container} from '../../Global/components';
import {InputSearch,ImgStyled,ButtonStyled,TopFooterStyled,HeaderStyled,BodyStyled,TopWrapper}from './style'
export default function TopFooter() {
    return (
        <TopWrapper>
        <Container>
            <TopFooterStyled>
                <div>
                <HeaderStyled>Subscribe on our newsletter</HeaderStyled>
                <BodyStyled>Get daily news on upcoming offers from many suppliers all over the world</BodyStyled>
                </div>
                <form>
                    <div style={{position:'relative'}}>
                        <ImgStyled src={email} alt="email" />
                        <InputSearch type="text" placeholder='Email' />
                        <ButtonStyled>Subscribe</ButtonStyled>
                    </div>
                </form>
            </TopFooterStyled>
        </Container>
        </TopWrapper>
    )
}
