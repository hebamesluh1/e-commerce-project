import React from 'react'

//image
import logo from '../../Assets/image/footer/logo.png';
import fac from '../../Assets/image/footer/facebook3.png';
import twitter from '../../Assets/image/footer/twitter3.png';
import linkedin from '../../Assets/image/footer/linkedin3.png';
import instagram from '../../Assets/image/footer/instagram3.png';
import youtube from '../../Assets/image/footer/youtube3.png';
import appStore from '../../Assets/image/footer/Property 1=Store, Property 2=Appstore.png';
import googleStore from '../../Assets/image/footer/Property 1=Store, Property 2=Google Play.png';


import { UlStyled, LiStyled,WrapperStyled  } from './../MenuNav/style';
import {Container} from '../../Global/components';
import styled  from 'styled-components';

import FooterList from '../FooterList';


const MiddleFooterStyled = styled.div`
    padding:2.5rem 0;
    background:${props=>props.theme.palette.sectionBackground};
    @media (max-width: 920px) {
        display: none;
      }
`

export default function MiddleFooter() {
    return (
    <MiddleFooterStyled>

        <Container>
            <WrapperStyled>
                <div>
                    <img src={logo} alt="logo" />
                    <p style={{width:'300px'}}>Best information about the company gies here but now lorem ipsum is</p>
                    <UlStyled>
                        <LiStyled>
                            <a href="/facebook"><img src={fac} alt="facebook" /></a>
                        </LiStyled>

                        <LiStyled>
                            <a href="/twitter"><img src={twitter} alt="twitter" /></a>
                        </LiStyled>

                        <LiStyled>
                            <a href="/linkedin"><img src={linkedin} alt="linkedin" /></a>
                        </LiStyled>

                        <LiStyled>
                            <a href="/instagram"><img src={instagram} alt="instagram" /></a>
                        </LiStyled>

                        <LiStyled>
                            <a href="/youtube"><img src={youtube} alt="youtube" /></a>
                        </LiStyled>
                    </UlStyled>
                </div>
                <FooterList title="About" content1="About Us" content2="Find store" content3="Categories" content4="Blogs"/>

                <FooterList title="Partnership" content1="About Us"  content2="Find store" content3="Categories" content4="Blogs"/>

                <FooterList title="Information" content1="Help Center" content2="Money Refund" content3="Shipping" content4="Contact us" content5="Blogs"/>

                <FooterList title="For users" content1="Login" content2="Register" content3="Settings" content4="My Orders"/>

                <FooterList title="Get app" content1={<img src={appStore} alt="appStore" />} content2={<img src={googleStore} alt="googleStore" />}>
                    </FooterList>
        </WrapperStyled>
        </Container>
    </MiddleFooterStyled>
    )
}
