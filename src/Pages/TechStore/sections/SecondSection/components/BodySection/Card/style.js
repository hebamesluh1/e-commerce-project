import styled from "styled-components";

export const CardWrapper=styled.div`
    border: 1px solid #E3E8EE;
    border-radius:5px;
    margin:10px 0px 10px 10px;
    padding:10px 20px;
    display:flex;
    background:${props=>props.theme.palette.sectionBackground};
    justify-content:space-between;
`
export const H5Styling = styled.h5`
    font-weight: 500;
    font-size: 16px;
    line-height: 22px;
    color: #1C1C1C;
`
export const H4Styling = styled.h4`
    font-weight: 600;
    font-size: 20px;
    line-height: 28px;
    letter-spacing: -0.2px;
    color: #1C1C1C;
    del{
        font-weight: 600;
        font-size: 16px;
        line-height: 19px;
        color: #8B96A5;
    }
`
export const DescriptionStyle = styled.p`
    font-size: 16px;
    line-height: 24px;
    letter-spacing: -0.2px;
    color: #505050;
    padding-top: 20px;
`
export const Details = styled.a`
    font-size: 16px;
    line-height: 19px;
    color: #0D6EFD;
    padding-top: 20px;
    display: inline-block;
`
export const ImgBorder = styled.button`
    border: 1px solid #E3E8EE;
    box-shadow: 0px 1px 2px rgba(56, 56, 56, 0.08);
    border-radius: 6px;
    background:#fff;
    display:flex;
    align-items:center;
    padding:10px;
    cursor:pointer;
`