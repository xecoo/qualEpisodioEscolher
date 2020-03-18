import React, { Component } from 'react';
import styled from 'styled-components';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

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

    render() {
        return (
            <FormContainer>
                <h1>Random</h1>
                <p>O random foi desenvolvido com a necessidade de fazer eu finalmente assistir
                a algum episódio e não ir dormir frustrado ao final de ver toda a lista da
                plataforma streaming.
                </p>
                <label>Escolha qual série quer assistir hoje:</label>
                <FormControl variant="outlined" >
                    <InputLabel htmlFor="outlined-age-native-simple">Serie</InputLabel>
                    <Select
                        native
                        value=""
                        onChange=""
                        label="Age"
                    >
                        <option aria-label="None" value="" />
                        <option value={10}>Ten</option>
                        <option value={20}>Twenty</option>
                        <option value={30}>Thirty</option>
                    </Select>
                </FormControl>
            </FormContainer>

        );
    }
}
