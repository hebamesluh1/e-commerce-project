import React from 'react'


import menu from '../../../../../../Assets/image/ListStore/components/table_rows.png';
import grid from '../../../../../../Assets/image/ListStore/components/grid_view.png';


import {WrapperSection,FlexDiv} from './style';


import { NavLink } from 'react-router-dom';
import { PATHS } from '../../../../../../routes';
import CheckBox from '../../../Aside/components/Brands/CheckBox';


export default function HeaderSection() {
    return (
        <WrapperSection>
            <div>12,911 items in <span>Mobile accessory </span></div>

            <FlexDiv>
            <FlexDiv>
                <CheckBox title="Verified only"/>  
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
