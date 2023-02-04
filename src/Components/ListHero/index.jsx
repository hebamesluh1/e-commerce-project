import React from 'react';
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
    return (
        <Style>
            <ul>
                <li className='active'>Automobiles</li>
                <li>Clothes and wear</li>
                <li>Home interiors</li>
                <li>Computer and tech</li>
                <li>Tools, equipments</li>
                <li>Sports and outdoor</li>
                <li>Animal and pets</li>
                <li>Machinery tools</li>
                <li>More category</li>
            </ul>
        </Style>
    )
}
