import React from 'react'
import {PartWrapper,HeadPart,BodyPart} from './style'
import  styled  from 'styled-components';

const StyleBody = styled.div`
padding:10px 20px;
@media(max-width:920px){
    display:none;
}
`
export default function ProductPart({title,img,body}) {
    return (
        <PartWrapper>
        <StyleBody>
            <HeadPart>{title}</HeadPart>
            <BodyPart>From USD{body}</BodyPart>
        </StyleBody>
        <img src={img} alt="img"/>
        </PartWrapper>
    )
}
