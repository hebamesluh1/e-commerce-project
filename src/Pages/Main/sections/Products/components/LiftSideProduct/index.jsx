import React from 'react'
import styled  from 'styled-components';

const HeadProduct = styled.h3`
    color:${props=>props.theme.palette.contentColor};
    ${props=>props.theme.fonts.h5}
    padding:20px;
    width:150px;
`
const WrapperLeft = styled.div`
    border-radius:6px;
    border-radius: 6px 0px 0px 6px;
    position:relative;
    flex-basis: 17%;
    height:100%;
    @media (max-width: 920px) {
    display:none;
  }
`
const ButtonProduct = styled.button`
    background: ${props=>props.theme.palette.sectionBackground};
    border: 1px solid ${props=>props.theme.palette.sectionBackground};
    box-shadow: 0px 1px 2px rgba(56, 56, 56, 0.08);
    border-radius: 6px;
    padding:10px 20px;
    ${props=>props.theme.fonts.h6}
    text-align: center;
    color: ${props=>props.theme.palette.contentColor};
    margin:20px;
`
export default function LiftSideProduct({cover,title}) {
    return (
        <WrapperLeft>
            <div>
                <img src={cover} alt="cover" />
            </div>
            <div style={{position:'absolute',top:'0'}}>
            <HeadProduct>{title}</HeadProduct>
            <ButtonProduct>Source now </ButtonProduct>
            </div>
        </WrapperLeft>
    )
}
