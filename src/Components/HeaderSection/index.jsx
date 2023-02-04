import React from 'react'


import menu from '../../Assets/image/ListStore/components/table_rows.png';
import grid from '../../Assets/image/ListStore/components/grid_view.png';


import styled from "styled-components";

import { NavLink } from 'react-router-dom';
import { PATHS } from './../../routes/index';
import { FlexBetween } from '../../Global/components';

const WrapperSection = styled(FlexBetween)`
    ${props=>props.theme.fonts.body1};
    color: ${props=>props.theme.palette.contentColor};
    padding:10px;
    border: 1px solid ${props=>props.theme.palette.gray300};
    border-radius: 6px;
    background:${props=>props.theme.palette.sectionBackground};
    margin-left:10px;
    span{
        font-weight: bold;
    }
    .menu{
        display:flex;
        align-items:center;
        border: 1px solid ${props=>props.theme.palette.gray300};
        border-radius:5px;
    }
    .rightSection{
        display:flex;
        align-items: center;
    }
    }
    input{
        background:${props=>props.theme.palette.primary};
        border-radius: 5px;
        width: 20px;
        height: 20px;
        margin-right:10px;
    }
    select{
        background:${props=>props.theme.palette.sectionBackground};
        border: 1px solid ${props=>props.theme.palette.gray300};
        border-radius: 6px;
        padding:10px;
        width: 200px;
        margin:0 10px;
    }
    a{
        padding:5px;
    }
    .active{
        background:${props=>props.theme.palette.gray300};
        border: 1px solid ${props=>props.theme.palette.gray300};
    }
`
const FlexDiv = styled.div`
    display:flex;
    align-items: center;
`
export default function HeaderSection() {
    return (
        <WrapperSection>
            <div>12,911 items in <span>Mobile accessory </span></div>

            <FlexDiv>
            <FlexDiv>
                <input type="checkbox" checked />   Verified only
            </FlexDiv>
            <div>
                <select>
                    <option value="#">Featured</option>
                </select>
            </div>
            <div className='menu'>
                <FlexDiv><NavLink to={PATHS.GRID}><img src={menu} alt="menu" /></NavLink></FlexDiv>
                <FlexDiv><NavLink to={PATHS.TABLE}><img src={grid} alt="menu" /></NavLink></FlexDiv>
            </div>
            </FlexDiv>
        </WrapperSection>
    )
}
