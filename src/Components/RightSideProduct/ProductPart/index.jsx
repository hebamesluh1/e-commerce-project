import React from 'react'
import styled from 'styled-components';


const PartWrapper = styled.div`
    border: 1px solid #E0E0E0;
    display:flex;
    height:128.5px;
    justify-content: space-between;
    background:${props=>props.theme.palette.sectionBackground}
`
const HeadPart = styled.h3`
    ${props=>props.theme.fonts.body1};
    color: ${props=>props.theme.palette.contentColor};
    padding:20px 0;
`
const BodyPart = styled.p`
    font-weight: 400;
    font-size: 13px;
    line-height: 16px;
    color: ${props=>props.theme.palette.gray500};
`

export default function ProductPart({title,img,body}) {
    return (
        <PartWrapper>
        <div style={{padding:' 10px 20px'}}>
            <HeadPart>{title}</HeadPart>
            <BodyPart>From USD{body}</BodyPart>
        </div>
        <img src={img} alt="img"/>
        </PartWrapper>
    )
}
