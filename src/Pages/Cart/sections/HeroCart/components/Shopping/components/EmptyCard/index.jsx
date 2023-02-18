import React from 'react'
import img from '../../../../../../../../Assets/image/cart/card1/preview.png'
import styled from 'styled-components'
const Div = styled.div`
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
}
`
const EmptyCard = () => {
  return (
    <Div>
        <img src={img} alt="img" width="50%" />
        <h1>Cart is empty</h1>
    </Div>
  )
}

export default EmptyCard