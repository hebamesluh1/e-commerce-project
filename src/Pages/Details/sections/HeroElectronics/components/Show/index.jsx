import React from 'react'

//style
import { FlexBetween } from '../../../../../../Global/components';
import { useParams } from 'react-router-dom';
import { products } from '../../../../../../mock/products';

export default function Show() {
    const { id } = useParams();
    const myData = products.find((item) => item.id === Number(id));
    return (
        <div>
            <div>
                <img src={myData.img} alt="" />
            </div>
            <FlexBetween>
                <img src={myData.img} alt="" width={'80px'} />
                <img src={myData.img} alt="" width={'80px'} />
                <img src={myData.img} alt="" width={'80px'} />
                <img src={myData.img} alt="" width={'80px'} />
                <img src={myData.img} alt="" width={'80px'} />
            </FlexBetween>
        </div>
    )
}
