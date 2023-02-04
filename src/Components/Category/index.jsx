import React from 'react'
import HeadAside from '../HeadAside';
import styled from "styled-components";
import SeeAll from './../SeeAll/index';


const UlCategory = styled.ul`
    list-style:none;
    ${props=>props.theme.fonts.body1};
    color: ${props=>props.theme.palette.gray600};
    li{
        padding:10px 0;
    }
`
export default function Category() {
    return (
        <div>
            <HeadAside title="Category"/>
            <UlCategory>
                <li>Mobile accessory</li>
                <li>Electronics</li>
                <li>Smartphones</li>
                <li>Modern tech</li>
                <li><SeeAll/></li>
            </UlCategory>
        </div>
    )
}
