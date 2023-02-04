import React from 'react'
import styled from 'styled-components';
import {SpaceContainer} from '../../Global/components';


const Wrapper = styled.div`
    border-radius: 8px;
    background:#237CFF;
    display:flex;
    justify-content:space-between;
    align-items:center;
    padding:20px;
    color:#fff;
    position:relative;
`
const ButtonStyle = styled.button`
    padding:10px;
    background: #FF9017;
    border-radius: 6px;
    border:1px solid #ff9017;
    font-weight: 500;
    color:#fff;
    margin-top: 5%;
    margin-right: 10%;
    cursor:pointer;
`
const H3 = styled.h3`
    font-weight: 600;
    font-size: 24px;
    line-height: 32px;
    letter-spacing: -0.2px;
    color: #FFFFFF;
`
const P = styled.p`
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    color: #FFFFFF;
    opacity: 0.7;
`
const RightAds = styled.div`
    position:absolute;
    width:50%;
    right:0;
    top:0;
    height:100%;
    clip-path: polygon(0 0, 100% 0, 100% 100%, 10% 100%);
    background: #fff;
    background: #005ade;
    text-align: right;
    border-radius: 0px 6px 6px 0px;
`
export default function Ad() {
    return (
        <SpaceContainer>
            <Wrapper>
                <div style={{padding: "20px"}}>
                    <H3>Super discount on more than 100 USD</H3>
                    <P>Have you ever famillly just write dummy info</P>
                </div>
                <RightAds><ButtonStyle>Shop now</ButtonStyle></RightAds>
            </Wrapper>
        </SpaceContainer>
    )
}
