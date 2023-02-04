import styled from "styled-components";

export const FlexCenter = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
`

export const FlexBetween = styled(FlexCenter)`
    justify-content:space-between;
`
export const Container = styled.div`
    padding: 0 8rem;
`
export const SpaceContainer = styled.div`
    padding:20px 0;
`
export const BackgroundWhite=styled.div`
    border: 1px solid ${props=>props.theme.palette.gray300};
    border-radius: 6px;
    background:${props=>props.theme.palette.sectionBackground};
`