import React,{useEffect,useState} from 'react'

import {WrapperChecked} from './style'

export default function CheckBox({title,value=false}) {
    const [selected, setSelected] = useState(value);

    useEffect(() => {
        setSelected(value);
        // console.log(selected);
    }, [value])

    const toggleChecked = () => {
        setSelected(prev => !prev);
    }
    return (
        <WrapperChecked>
            <input type="radio" name='value' className='custom-radio' onChange={toggleChecked} checked={selected}/>
            <label onClick={toggleChecked}>{title}</label>
        </WrapperChecked>
    )
}
