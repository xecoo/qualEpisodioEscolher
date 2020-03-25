import React, { Component } from 'react';
import styled from 'styled-components';
import { Header } from '../../components/Header';
import Form from './Form';
import Footer from '../../components/Footer';

const LotteryPageContainer = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #282c34;
    color: white;
`;

const LotteryPageHeader = styled.div`
    background-color: #2484BF;
    padding: 10px;
    height: 5vh;
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
                    <Header />
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