import React,{useState} from 'react';
import {Style} from './style'


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
