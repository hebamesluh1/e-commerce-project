import React,{useContext} from 'react';
import img from '../../Assets/image/header/toggletheme.png';
import styled from 'styled-components';
import { themeContext } from '../../Context/themeContext';
import { darkTheme, lightTheme } from '../../Global/theme';
const ThemeBtn = styled.button`
    position:absolute;
    border:none;
    cursor:pointer;
    background:transparent;
    img{
        width:100%;
        border-radius: 6px;
    }
`
const BtnTheme = () => {
        const [theme, setTheme] = useContext(themeContext);
        const toggleTheme = () => {
            setTheme((theme) => (theme.theme === 'light' ? darkTheme : lightTheme));
            localStorage.setItem('theme',theme.theme==='dark'?'light':'dark');
        };
    return (
        <>
            <ThemeBtn onClick={toggleTheme}>
                <img src={img} alt="img" />
            </ThemeBtn>
        </>
    )
}

export default BtnTheme