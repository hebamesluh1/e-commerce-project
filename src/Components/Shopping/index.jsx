import React from 'react'
import BtnCart from '../BtnCart'
import Card from './Card'
import { BorderWrapper } from './../Payment/style';
import img1 from '../../Assets/image/cart/card2/img-group.png';
import img2 from '../../Assets/image/cart/card2/img-group (1).png';
import img3 from '../../Assets/image/cart/card2/img-group (2).png';
// import { useProductContext } from '../../Context/productContext';

export default function Shopping() {
    // const { state } = useProductContext();
    return (
        <BorderWrapper style={{gap: '20px'}}>
            <div>
                {/* {!state.products.length && 'No Products in the cart'}
                <ul>
                    {state?.products?.map((product) => (
                    <Card key={product.id} {...{ product }} />
                    ))}
                </ul>
                <p>Products in cart: {state?.count}</p>
                <p>total price: {state.products?.reduce((acc, cur) => acc + cur.price, 0)}</p> */}
    </div>
            <Card img={img1} quantity="9" price="78.99"/>
            <Card img={img2} quantity="3" price="39.00"/>
            <Card img={img3} quantity="1" price="170.50"/>
            <BtnCart />
        </BorderWrapper>
    )
}
