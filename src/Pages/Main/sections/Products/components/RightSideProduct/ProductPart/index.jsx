import React from 'react'
import {PartWrapper,HeadPart,BodyPart} from './style'

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
