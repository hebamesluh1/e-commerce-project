import React from 'react';


import avatar from '../../Assets/image/main/another/Avatar.png';


import styled from 'styled-components';
import { FlexCenter } from './../../Global/components';
import { useAuthContext } from './../../Context/authContext';



const FormBox = styled.form`
    background:#E3F0FF;
    padding:10px;
`
const Btn = styled.button`
    width:100%;
    background:${(props) => (!props.join ? "#fff; color:#0D6EFD;": "linear-gradient(180deg, #127FFF 0%, #0067FF 100%);color:#fff")};
    border:none;
    border-radius: 6px;
    padding:5px 0;
    margin-top:10px;
    padding:10px;
    cursor:pointer;
`
const Style = styled.div`
    p{
        ${props=>props.theme.fonts.body1}
        color:${props=>props.theme.palette.contentColor} ;
    }
`

const Box = styled.div`
    background:${(props)=>(!props.orange?"#55BDC4":"#F38332")};
    padding:20px;
    border-radius: 6px;
    margin:10px 0;
    color:#fff;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
`
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
