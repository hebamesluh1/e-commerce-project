import styled from "styled-components";

export const WrapperChecked = styled.div`
    display:flex;
    align-items:center;
    padding:10px 0;
    .custom-radio{
        position: absolute;
        z-index: -1;
        opacity: 0;
    }
    .custom-radio + label::before {
        transition: all 0.3s ease 0s;
        content: "";
        display: inline-block;
        width: 20px;
        height: 20px;
        flex-shrink: 0;
        -webkit-box-flex: 0;
        flex-grow: 0;
        border: 2px solid rgb(189, 189, 189);
        border-radius: 50%;
        margin-right: 0.5em;
        background-repeat: no-repeat;
        background-position: center center;
        background-size: 70% 70%;
    }
    .custom-radio:checked + label::before {
        border-color: rgb(13, 110, 253);
        background-color: rgb(13, 110, 253);
    }
    label{
        display:flex;
        align-items:center;
        ${props=>props.theme.fonts.body1};
        color: ${props=>props.theme.palette.contentColor};
    }
`