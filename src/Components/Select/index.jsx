import React from 'react'
import {SelectStyle} from './style';

const Select = ({value,value2="value",value3="value3"}) => {
    return (
        <>
        <SelectStyle>
            <option value={value}>{value}</option>
            <option value={value2}>{value2}</option>
            <option value={value3}>{value3}</option>
        </SelectStyle>
        </>
    )
}

export default Select