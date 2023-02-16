import React from 'react'

import {ItemsWrapper} from './style';

export default function ItemBox({img,price,body}) {
    return (
        <ItemsWrapper>
            <div><img src={img} alt="img" /></div>
            <div>
                <span>${price}</span>
                <p>{body}</p>
            </div>
        </ItemsWrapper>
    )
}
