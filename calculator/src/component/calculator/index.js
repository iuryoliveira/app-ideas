import React, { Component } from 'react';
import Display from '../display';
import BotaoNumerico from '../botaoNumerico';
import BotaoOperacao from '../botaoOperacao';
import './styles.css';

export default class Calculator extends Component {
    state = {
        valorDisplay: 0,
        valores: []
    }

    handleNumClick = (valorDisplay) => {
        this.setState({ valorDisplay });
    }

    handleOperacao = (operacao, valor) => {
        switch(operacao) {
            case '+':
            break;
        }
    }

    render() {
        const { valorDisplay } = this.state;
        return (
            <div className="form-calculadora">
                <Display valor={valorDisplay}/>
                <div className="teclado">
                    <BotaoOperacao valor={'('}/>
                    <BotaoOperacao valor={')'}/>
                    <BotaoOperacao valor={'%'}/>
                    <BotaoOperacao valor={'AC'}/>
                    <BotaoNumerico valor={7}/>
                    <BotaoNumerico valor={8}/>
                    <BotaoNumerico valor={9}/>
                    <BotaoOperacao valor={'/'}/>
                    <BotaoNumerico valor={4}/>
                    <BotaoNumerico valor={5}/>
                    <BotaoNumerico valor={6}/>
                    <BotaoOperacao valor={'*'}/>
                    <BotaoNumerico valor={1}/>
                    <BotaoNumerico valor={2}/>
                    <BotaoNumerico valor={3}/>
                    <BotaoOperacao valor={'-'}/>
                    <BotaoNumerico valor={0}/>
                    <BotaoOperacao valor={'.'}/>
                    <BotaoOperacao valor={'='}/>
                    <BotaoOperacao valor={'+'}/>     
                </div>
            </div>
        );
    }
}