import React from 'react';
import styled from 'styled-components';

const BoxWrapper = styled.div`
    border: 1px solid #E0E0E0;
    position:relative;
    color:${props=>props.theme.palette.contentColor};
    .body-box{
        padding:20px;
    }
    .icon{
        position:absolute;
        background: #D1E7FF;
        padding: 10px;
        border-radius: 50%;
        bottom: 25%;
        right: 10%;
        border: 1px solid ${props=>props.theme.palette.sectionBackground};
    }
`
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
