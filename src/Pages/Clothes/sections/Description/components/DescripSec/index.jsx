import React from 'react'
import { P } from '../../Sections/RelatedProduct/Card6/style';
import Check from './Check';
import HeadDescription from '../HeadDescription';
import { BorderWrapper } from '../Payment/style';
import Table from './../Table/index';

export default function DescripSec() {
    return (
        <BorderWrapper>
            <HeadDescription />
            <P>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </P>
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
