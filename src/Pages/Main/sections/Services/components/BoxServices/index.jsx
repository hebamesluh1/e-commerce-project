import React from 'react';
import {BoxWrapper} from './style';

export default function BoxServices({bg,icon,body}) {
    return (
        <BoxWrapper>
            <div><img src={bg} alt="bg" width="100%"/></div>
            <img src={icon} alt="icon" className="icon"/>
            <div className='body-box'>
                <p style={{width:"170px"}}>{body}</p>
            </div>
        </BoxWrapper>
    )
}
