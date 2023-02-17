import styled from "styled-components";

export const FlexDiv=styled.div`
    display:flex;
    align-items:center;
`
export const FlexCenter = styled(FlexDiv)`
    justify-content:center;
`

export const FlexBetween = styled(FlexDiv)`
    justify-content:space-between;
`
export const Container = styled.div`
    padding: 0 8rem;
    @media(max-width:920px){
    padding:0 1.5rem;
    }
`
export const SpaceContainer = styled.div`
    padding:20px 0;
`
export const BackgroundWhite=styled.div`
    border: 1px solid ${props=>props.theme.palette.gray300};
    border-radius: 6px;
    background:${props=>props.theme.palette.sectionBackground};
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