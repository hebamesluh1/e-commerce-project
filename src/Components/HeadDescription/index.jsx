import React from 'react'
import styled from 'styled-components';

const Ul = styled.ul`
    display:flex;
    list-style:none;
    gap:10px;
    color: #8B96A5;
    border-bottom:1px solid #eee;
    li{
        padding:10px;
    }
    .active{
        color: #0D6EFD;
        border-bottom:1px solid #0D6EFD;

    }
`
export default function HeadDescription() {
    return (
        <div>
            <Ul>
                <li className='active'>Description</li>
                <li>Reviews</li>
                <li>Shipping</li>
                <li>About company</li>
            </Ul>
        </div>
    )
}
