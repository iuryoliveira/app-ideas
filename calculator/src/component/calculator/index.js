import React, { Component } from 'react';
import Display from '../display';
import BotaoNumerico from '../botaoNumerico';
import BotaoOperacao from '../botaoOperacao';
import './styles.css';

export default class Calculator extends Component {
    state = {
        valorDisplay: '',
        operacoes: [],
        valores: []
    }

    handleNumClick = async (valor) => {
        let { valorDisplay } = this.state;
        valorDisplay += valor;
        await this.setState({ valorDisplay });
        console.log(this.state.valorDisplay);
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
                    <BotaoNumerico onClick={() => this.handleNumClick('7')} valor={7}/>
                    <BotaoNumerico onClick={() => this.handleNumClick('8')}valor={8}/>
                    <BotaoNumerico onClick={() => this.handleNumClick('9')}valor={9}/>
                    <BotaoOperacao valor={'/'}/>
                    <BotaoNumerico onClick={() => this.handleNumClick('4')} valor={4}/>
                    <BotaoNumerico onClick={() => this.handleNumClick('5')} valor={5}/>
                    <BotaoNumerico onClick={() => this.handleNumClick('6')} valor={6}/>
                    <BotaoOperacao valor={'*'}/>
                    <BotaoNumerico onClick={() => this.handleNumClick('1')} valor={1}/>
                    <BotaoNumerico onClick={() => this.handleNumClick('2')} valor={2}/>
                    <BotaoNumerico onClick={() => this.handleNumClick('3')} valor={3}/>
                    <BotaoOperacao valor={'-'}/>
                    <BotaoNumerico onClick={() => this.handleNumClick('0')} valor={0}/>
                    <BotaoOperacao valor={'.'}/>
                    <BotaoOperacao valor={'='}/>
                    <BotaoOperacao valor={'+'}/>     
                </div>
            </div>
        );
    }
}