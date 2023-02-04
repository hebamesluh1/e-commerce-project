import React from 'react'
import clear from '../../Assets/image/electronics1/clear.png';
import styled from 'styled-components';

const WrapperSuggestion = styled.div`
    margin:10px;
    display:flex;
    gap:10px;
    align-items:center;
    span{
        color: #0D6EFD;
    }
`
const BoxSuggestion = styled.div`
    display:flex;
    align-items:center;
    justify-content:space-between;
    padding:5px;
    border: 1px solid #0D6EFD;
    border-radius: 5px;
    background:#fff;
    width: 120px;
    p{
        margin-right:10px;
        color: #505050;
    }
`
export default function Suggestion() {
    return (
        <WrapperSuggestion>
            <BoxSuggestion>
                <p>Samsung</p>
                <img src={clear} alt="" />
            </BoxSuggestion>
            <BoxSuggestion>
                <p>Apple</p>
                <img src={clear} alt="" />
            </BoxSuggestion>
            <BoxSuggestion>
                <p>Poco</p>
                <img src={clear} alt="" />
            </BoxSuggestion>
            <BoxSuggestion>
                <p>Metallic</p>
                <img src={clear} alt="" />
            </BoxSuggestion>
            <BoxSuggestion>
                <p>4 star</p>
                <img src={clear} alt="" />
            </BoxSuggestion>
            <BoxSuggestion>
                <p>3 star</p>
                <img src={clear} alt="" />
            </BoxSuggestion>
            <div>
                <span>Clear all filter</span>
            </div>
        </WrapperSuggestion>
    )
}
