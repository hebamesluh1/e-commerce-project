import React from 'react'
import { useNavigate } from 'react-router-dom';

//image
import img from '../../../../Assets/image/main/another/notfound.png';

//style
import { FlexCenter } from '../../../../Global/components';
import styled from 'styled-components';
const BtnStyle=styled.button`
    border-radius:6px;
    border:1px solid #e0e0e0;
    padding:10px;
    margin:auto;
    cursor:pointer;
    color:#00f;
    background-color:transparent;
    margin-top:20px;
    &::hover{
        background:#00f;
        color:#fff;
    }
`


const NotFoundMessage = () => {
    const navigate = useNavigate();
    return (
        <FlexCenter style={{transform: "translateY(50%)",flexDirection:'column'}}>
            <div><img src={img} alt="notfound" /></div>
            <FlexCenter style={{flexDirection:'column'}}>
                <h1>ERROR 404</h1>
                <p>PAGE NOT FOUND</p>
                <BtnStyle onClick={()=>navigate(-1)}>BACK</BtnStyle>
            </FlexCenter>
        </FlexCenter>
    )
}
export default NotFoundMessage;
