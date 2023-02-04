import React from 'react';
import { useNavigate} from 'react-router-dom';
import { PATHS } from './../../routes/index';


import avatar from '../../Assets/image/main/another/Avatar.png';


import styled from 'styled-components';
import { FlexCenter } from './../../Global/components';



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
    const navigate = useNavigate()
    return (
        <Style>
            <FormBox>
                <FlexCenter>
                    <img src={avatar} alt="avatar" style={{ marginRight:'10px'}} />
                    <p>Hi, user let’s get stated</p>
                </FlexCenter>
                <Btn join="join" onClick={()=>navigate(PATHS.SIGNUP)}>Join now</Btn>
                <Btn onClick={()=>navigate(PATHS.LOGIN)}>Log in</Btn>
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
