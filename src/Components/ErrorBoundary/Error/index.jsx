import React from 'react'
import img from '../../../Assets/image/main/another/download.png';
import {Navigate } from 'react-router-dom';
import { FlexCenter } from './../../../Global/components';
import { PATHS } from './../../../routes/index';
import styled from 'styled-components';

const BtnStyle=styled.button`
  border-radius:6px;
  border:1px solid #e0e0e0;
  padding:10px;
  margin:auto;
  cursor:pointer;
`
const Error = () => {
  
  return (
    <FlexCenter style={{    transform: "translateY(50%)",flexDirection:'column'}}>
      <div><img src={img} alt="error happened" /></div>
      <FlexCenter style={{flexDirection:'column'}}>
        <h1>Oops! something went wrong </h1>
        <BtnStyle onClick={()=><Navigate to={PATHS.MAIN}/>}>Back to home page</BtnStyle>
      </FlexCenter>
    </FlexCenter>
  )
}
export default Error;
