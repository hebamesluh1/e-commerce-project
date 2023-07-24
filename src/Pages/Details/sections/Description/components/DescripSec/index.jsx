import React from 'react'

//styles
import { P } from '../../../RelatedProduct/Card/style';
import { BorderWrapper } from '../../../../../Cart/sections/HeroCart/components/Payment/style';


//components
import Check from './Check';
import HeadDescription from './HeadDescription';
import Table from './Table';
import { useParams } from 'react-router-dom';
import { products } from '../../../../../../mock/products';

export default function DescripSec() {
    const {id} = useParams();
    const myData = products.find((item) => item.id === Number(id));
    return (
        <BorderWrapper>
            <HeadDescription />
            <P>{myData.description} </P>
            <Table />
            <div>
                <Check/>
                <Check/>
                <Check/>
                <Check/>
            </div>
        </BorderWrapper>
    )
}
