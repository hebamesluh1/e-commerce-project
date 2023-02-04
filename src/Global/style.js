import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
@import url(https://fonts.googleapis.com/css?family=Inter:100,200,300,regular,500,600,700,800,900);
* {
    margin : 0;
    padding : 0;
    box-sizing: border-box;
    font-family : "Inter",sans-serif;
}
a{
    text-decoration:none;
}
body{
    background-color:${props=>props.theme.palette.background};
}
.lds-dual-ring {
    display: inline-block;
    width: 80px;
    height: 80px;
    position: absolute;
    top: 50%;
    left: 50%;
    }
    .lds-dual-ring:after {
    content: " ";
    display: block;
    width: 64px;
    height: 64px;
    margin: 8px;
    border-radius: 50%;
    border: 6px solid #000;
    border-color: #000 transparent #000 transparent;
    animation: lds-dual-ring 1.2s linear infinite;
    }
    @keyframes lds-dual-ring {
        0% {
        transform: rotate(0deg);
        }
        100% {
        transform: rotate(360deg);
        }
    }
    a{
        text-decoration:none;
        color: ${props=>props.theme.palette.contentColor};
        ${props=>props.theme.fonts.h6}
    }
`;