import React from 'react';

import avatar from '../../../../../../Assets/image/main/another/Avatar.png';

import {FormBox,Btn,Style,Box} from './style'
import { FlexCenter } from '../../../../../../Global/components';
import { useAuthContext } from '../../../../../../Context/authContext';


export default function FormHero() {
    const {
        name,
        logout
    } = useAuthContext();
    return (
        <Style>
            <FormBox>
                <FlexCenter>
                    <img src={avatar} alt="avatar" style={{ marginRight:'10px'}} />
                    <p>Hi {name}, Enjoy Shopping </p>
                </FlexCenter>
                <Btn join="join" onClick={()=>logout()}>Logout</Btn>
            </FormBox>
            <Box orange="orange">
            Get US $10 off with a new <div>supplier</div>
            </Box>
            <Box>
            Send quotes with supplier preferences
            </Box>
        </Style>
    )
}
