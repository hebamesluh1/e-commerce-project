import React from 'react'
import leftArrow from '../../../../../../Assets/image/ListStore/components/chevron-left.png';
import rightArrow from '../../../../../../Assets/image/ListStore/components/chevron-right.png';
import styled from 'styled-components';

const WrapperNumber = styled.div`
    border: 1px solid ${props=>props.theme.palette.gray300};
    border-radius:5px;
    display:flex;
    align-items:center;
    .item{
        padding:10px;
        border: 1px solid ${props=>props.theme.palette.gray300};
    }
    .num{
        height: 100%;
        padding: 10px 15px;
        display: flex;
        align-items: center;
    }
    .active{
        background: ${props=>props.theme.palette.gray200};
        color:${props=>props.theme.palette.gray500};
    }
`
const WrapperFooter = styled.div`
    display:flex;
    justify-content:flex-end;
    margin-bottom:30px;
    select{
        background:${props=>props.theme.palette.sectionBackground};
        border: 1px solid ${props=>props.theme.palette.gray300};
        border-radius: 6px;
        padding:10px;
        width: 100px;
        margin:0 10px;
    }
`
export default function FooterListPage() {
    return (
        <WrapperFooter>
            <select>
                <option value="10">Show 10</option>
            </select>
            <WrapperNumber>
                <div className='item'><img src={leftArrow} alt="" /></div>
                <div className='item num active'>1</div>
                <div className='item num'>2</div>
                <div className='item num'>3</div>
                <div className='item'><img src={rightArrow} alt="" /></div>
            </WrapperNumber>
        </WrapperFooter>
    )
}
