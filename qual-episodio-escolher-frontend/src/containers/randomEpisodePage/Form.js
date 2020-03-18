import React, { Component } from 'react';
import styled from 'styled-components';
import axios from 'axios';

const FormContainer = styled.div`
    display:grid;
    grid-templte-column:1fr;
    align-items:center;
    justify-content:center;
    gap:20px;
`;


export default class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            serie: ''
        };
    }

    onSubmitSerie = async (event) => {
        event.preventDefault();
        const body = {
            idSerie: this.state.serie,
        }
        console.log("Idserie: ", body)

        const config = {
            headers: {'Access-Control-Allow-Origin': '*'}
        };

        const response = await axios
            .get(
                'https://6i406gvgj9.execute-api.us-east-1.amazonaws.com/producao/lottery',
                config, body
                
            )
        ;

        //TODO - erro de CORS
        console.log(response.data);
    }

    onChangeInput = (event) => {
        const { name, value } = event.target
        this.setState({ [name]: value })
    }

    render() {
        return (
            <FormContainer>
                <h1>Random</h1>
                <h4>O objetivo do app é minimizar o tempo de escolha de um episódio da série que deseja
                    assistir.</h4>
                <p>Você usuário, que adora reassistir suas séries favoritas, terá um guia para
                selecionar seu próximo episódio.
                </p>
                <label>Escolha qual série quer assistir hoje:</label>
                <form onSubmit={this.onSubmitSerie} >
                    <label >Série</label>
                    <select
                        name="serie"
                        value={this.state.serie}
                        onChange={this.onChangeInput}
                    >
                        <option value=""></option>
                        <option value="6791e000-7192-4438-b8a1-ef6f6feafbd2">Friends</option>
                        <option value="955ba34e-e5d3-4b9f-a070-5a55916a4710">How I Met Your Mother</option>
                    </select>
                    <button type={'submit'}>Start</button>
                </form>
            </FormContainer>

        );
    }
}
