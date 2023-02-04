import React,{useContext} from 'react';
import img from '../../Assets/image/header/download.png';
import styled from 'styled-components';
import { themeContext } from '../../Context/themeContext';
import { darkTheme, lightTheme } from '../../Global/theme';
const ThemeBtn = styled.button`
    position:absolute;
    top:25px;
    right:100px;
    border:none;
    border-radius:50%;
    cursor:pointer;
    background:transparent;
    img{
        width:30px;
        height:30px;
    }
`
const BtnTheme = () => {
        const [theme, setTheme] = useContext(themeContext);
    return (
        <>
            <ThemeBtn onClick={() => setTheme((prevState) => (prevState.theme === 'light' ? darkTheme : lightTheme))}>
                <img src={img} alt="img" />
            </ThemeBtn>
        </>
    )
}

export default BtnTheme