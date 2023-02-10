import React from 'react'
import styled from 'styled-components';
import Card from './Card';
import Suggestion from '../Brands/CheckBox/Suggestion';

import goodRate from '../../Assets/image/electronics1/goodrate.png';
import rate from '../../Assets/image/electronics1/rating.png';
import pic1 from '../../Assets/image/electronics1/03.png';
import pic2 from '../../Assets/image/electronics1/04.png';
import pic3 from '../../Assets/image/electronics1/05.png';
import pic4 from '../../Assets/image/electronics1/07.png';
import pic5 from '../../Assets/image/electronics1/08.png';
import pic6 from '../../Assets/image/electronics1/09.png';
import pic7 from '../../Assets/image/electronics1/10.png';
const Wrapper = styled.div`
    display:flex;
    justify-content:space-between;
    margin-left:10px;
    .content-wrapper{
        flex-basis: 30%;
    }
`
export default function BodySuggestion() {
    return (
        <>
        <Suggestion/>
        <Wrapper>
            <div className='content-wrapper'>
                <Card img={pic7} rateImg={goodRate} rate="7.5" discount="$1128.00" />
                <Card img={pic4} rateImg={goodRate} rate="7.5" discount="$1128.00" />
                <Card img={pic2} rateImg={goodRate} rate="7.5" discount="$1128.00" />
            </div>
            <div className='content-wrapper'>
                <Card img={pic6} rateImg={rate} rate="5.9" discount="$1128.00" />
                <Card img={pic3} rateImg={goodRate} rate="7.5" discount="$1128.00" />
                <Card img={pic1} rateImg={goodRate} rate="7.5" discount="$1128.00" />
            </div>
            <div className='content-wrapper'>
                <Card img={pic5} rateImg={goodRate} rate="7.5" discount="" />
                <Card img={pic6} rateImg={goodRate} rate="7.5" discount="" />
                <Card img={pic7} rateImg={goodRate} rate="7.5" discount="" />
            </div>
        </Wrapper>
        </>
    )
}
