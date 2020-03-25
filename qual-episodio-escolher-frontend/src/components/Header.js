import React from 'react'
import styled from 'styled-components';
import Helmet from 'react-helmet';
import logo from '../images/logo.png';
import Menu from './Menu'

const StyledLogo = styled.div`
    display:flex;
    flex-direction:row;
`

export const Header = () => {
    return (
        <StyledLogo>
            <Helmet title="Random" />
            <header className="">
                <img src={logo} className="App-logo" alt="random" />
            </header>
            <h1>Random</h1>
            <Menu/>
        </StyledLogo>
    )
};