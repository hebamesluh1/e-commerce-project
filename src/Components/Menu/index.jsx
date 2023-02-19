import React from 'react';

import profile from '../../Assets/image/header/Profile.png';
import Messages from '../../Assets/image/header/Message.png';
import Orders from '../../Assets/image/header/Orders.png';
import Cart from '../../Assets/image/header/Cart.png';
import styled  from 'styled-components';
import { Link } from 'react-router-dom';
import { PATHS } from './../../routes/index';
import BtnTheme from '../BtnTheme';

const UlStyle = styled.ul`
    list-style:none;
    display:flex;
    gap:2rem;
`

const Menu=()=> {
    return (
        <UlStyle>
            <li>
                <Link to='/'><img src={profile} alt="profile" /></Link>
            </li>

            <li>
                <Link to='/'><img src={Messages} alt="messages" /></Link>
            </li>

            <li>
                <Link to={`${PATHS.HOME}/details`}><img src={Orders} alt="order" /></Link>
            </li>

            <li>
                <Link to={`${PATHS.HOME}/cart`}><img src={Cart} alt="cart" /></Link>
            </li>
            <li><BtnTheme/></li>
        </UlStyle>
    )
}
export default Menu;
