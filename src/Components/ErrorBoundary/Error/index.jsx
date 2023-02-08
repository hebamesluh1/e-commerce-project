import React from 'react'
import img from '../../../Assets/image/main/another/download.png';
import { FlexCenter } from './../../../Global/components';

const Error = () => {
  return (
    <FlexCenter style={{    transform: "translateY(50%)",flexDirection:'column'}}>
      <div><img src={img} alt="error happened" /></div>
      <FlexCenter style={{flexDirection:'column'}}>
        <h1>Oops! something went wrong </h1>
      </FlexCenter>
    </FlexCenter>
  )
}
export default Error;
