import React from 'react'
import styled from 'styled-components';

const StyledLogo = styled.div`
    display:flex;
    flex-direction:row;
`

export const Logo = () => {
    return (
        <StyledLogo>
            Random
        </StyledLogo>
    )
};