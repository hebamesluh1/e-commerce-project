import React from 'react'
import Style from './style'


// images
import noAvatar from '../../../../../Assets/image/mobile/Avatar.png';
import { useAuthContext } from './../../../../../Context/authContext';

const User = () => {
    const {
        name,
    } = useAuthContext();

    return (
        <Style>
            <img src={noAvatar} alt="avatar" />
            <p
                margin="7px 0 0"
                transform="capitalize"
            >{name}</p>
        </Style>
    )
}

export default User