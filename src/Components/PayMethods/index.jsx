import React from 'react'
import styled from 'styled-components'
 
//Importing payment methods logos
import Visa1 from "../../Assets/image/Login/Visa.png";
import Visa2 from "../../Assets/image/Login/Visa1.png";
import Visa3 from "../../Assets/image/Login/Visa2.png";
import Visa from "../../Assets/image/Login/payment.png";


const PayMethodsList = styled.ul`
    display: flex;
    gap: 14px;
    list-style: none;
`
export default function PayMethods() {
  return (
    <PayMethodsList>
      <li>
        <img src={Visa1} alt="American Express" />
      </li>
      <li>
        <img src={Visa3} alt="Paypal" />
      </li>
      <li>
        <img src={Visa2} alt="Master Card" />
      </li>
      <li>
        <img src={Visa} alt="Visa Card" />
      </li>
    </PayMethodsList>
  );
}