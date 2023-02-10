import React,{useState} from 'react';
import styled from 'styled-components';

const Style = styled.div`
    ul{
        list-style:none;
    }
    li{
        padding:10px;
        margin:10px;
        color: ${props=>props.theme.palette.gray600};
        cursor:pointer;
    }
    .active{
        background: #E5F1FF;
        color: ${props=>props.theme.palette.contentColor};
        border-radius:6px;
    }
`
export default function ListHero() {
    const [active, setActive] = useState(1);
    const handelActive = (index) => setActive(index);
    return (
        <Style>
            <ul>
                <li className={active === 1 ? 'active' : ''} onClick={()=>handelActive(1)}>Automobiles</li>
                <li className={active === 2 ? 'active' : ''} onClick={()=>handelActive(2)}>Clothes and wear</li>
                <li className={active === 3 ? 'active' : ''} onClick={()=>handelActive(3)}>Home interiors</li>
                <li className={active === 4 ? 'active' : ''} onClick={()=>handelActive(4)}>Computer and tech</li>
                <li className={active === 5 ? 'active' : ''} onClick={()=>handelActive(5)}>Tools, equipments</li>
                <li className={active === 6 ? 'active' : ''} onClick={()=>handelActive(6)}>Sports and outdoor</li>
                <li className={active === 7 ? 'active' : ''} onClick={()=>handelActive(7)}>Animal and pets</li>
                <li className={active ===  8? 'active' : ''} onClick={()=>handelActive(8)}>Machinery tools</li>
                <li className={active === 9 ? 'active' : ''} onClick={()=>handelActive(9)}>More category</li>
            </ul>
        </Style>
    )
}
