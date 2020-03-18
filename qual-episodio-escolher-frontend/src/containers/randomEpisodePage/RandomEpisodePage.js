import React, { Component } from 'react';
import styled from 'styled-components';
import { Logo } from '../../components/Logo';
import Form from './Form';
import Footer from '../footer/Footer';
import Menu from '../../components/Menu';

const LotteryPageContainer = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #262625;
    color: white;
    heigth: 100vh;
`;

const LotteryPageHeader = styled.div`
    background-color: #2484BF;
    padding: 10px;
    display:flex;
    flex-direction:row;
    height: 5vh;
    justify-content: space-between;
`;

const LotteryPageBody = styled.div`
    padding: 10px;
    height: 54vh;
`;

const LotteryPageFooter = styled.div`
    background-color: #2484BF;
    padding: 10px;
    color: white;
    height: 40px;
    align-self: stretch;
`;

export default class LotteryPage extends Component {
    render() {
        return (
            <LotteryPageContainer>
                <LotteryPageHeader>
                    <Logo />
                    <Menu/>
                </LotteryPageHeader>
                <LotteryPageBody>
                    <Form />
                </LotteryPageBody>
                <LotteryPageFooter>
                    <Footer />
                </LotteryPageFooter>
            </LotteryPageContainer>
        )
    }
}