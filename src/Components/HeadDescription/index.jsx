import React,{useState} from 'react'
import styled from 'styled-components';

const Ul = styled.ul`
    display:flex;
    list-style:none;
    gap:10px;
    color: #8B96A5;
    border-bottom:1px solid #eee;
    li{
        padding:10px;
        cursor:pointer;
    }
    .active{
        color: #0D6EFD;
        border-bottom:1px solid #0D6EFD;

    }
`
export default function HeadDescription() {
    const [active, setActive] = useState(1);
    const handelActive = (index) => setActive(index);
    return (
        <div>
            <Ul>
                <li className={active === 1 ? 'active' : ''} onClick={()=>handelActive(1)}>Description</li>
                <li className={active === 2 ? 'active' : ''} onClick={()=>handelActive(2)}>Reviews</li>
                <li className={active === 3 ? 'active' : ''} onClick={()=>handelActive(3)}>Shipping</li>
                <li className={active === 4 ? 'active' : ''} onClick={()=>handelActive(4)}>About company</li>
            </Ul>
        </div>
    )
}
