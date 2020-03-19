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
    }

    salvarOperacao = async (operacao) => {
        let { operacoes, valores, valorDisplay } = this.state;
        if(valorDisplay != '') {
            operacoes.push(operacao);
            valores.push(parseFloat(valorDisplay));
            await this.setState({ operacoes, valores, valorDisplay: '' });
        } 
    }

    calcularResultado = async () => {
        let { operacoes, valores, valorDisplay } = this.state;
        let resultado = 0;

        valores.push(parseFloat(valorDisplay));

        await valores.forEach( async (valor, index) => {
            if(index === 0) resultado = valor;

            else if(operacoes[index - 1] === '+') resultado += valor;

            else if(operacoes[index - 1] === '-') resultado -= valor;

            else if(operacoes[index - 1] === '*') resultado *= valor;

            else if(operacoes[index - 1] === '/') resultado /= valor;
        });

        await this.setState({ operacoes: [], valores: [], valorDisplay: resultado });   
    }

    handleOperacao = async (operacao) => {
        await this.salvarOperacao(operacao);
    }

    handlePercentual = async() => {
        let { valorDisplay } = this.state;
        valorDisplay *= 0.01;

        await this.setState({ valorDisplay });
    }

    handleLimparTudo = async() => {
        await this.setState({ operacoes: [], valores: [], valorDisplay: '' });   
    }

    render() {
        const { valorDisplay } = this.state;
        return (
            <div className="form-calculadora">
                <Display valor={valorDisplay}/>
                <div className="teclado">
                    <BotaoOperacao valor={'('}/>
                    <BotaoOperacao valor={')'}/>
                    <BotaoOperacao onClick={() => this.handlePercentual()} valor={'%'}/>
                    <BotaoOperacao onClick={() => this.handleLimparTudo()} valor={'AC'}/>
                    <BotaoNumerico onClick={() => this.handleNumClick('7')} valor={7}/>
                    <BotaoNumerico onClick={() => this.handleNumClick('8')} valor={8}/>
                    <BotaoNumerico onClick={() => this.handleNumClick('9')} valor={9}/>
                    <BotaoOperacao onClick={() => this.handleOperacao('/')} valor={'/'}/>
                    <BotaoNumerico onClick={() => this.handleNumClick('4')} valor={4}/>
                    <BotaoNumerico onClick={() => this.handleNumClick('5')} valor={5}/>
                    <BotaoNumerico onClick={() => this.handleNumClick('6')} valor={6}/>
                    <BotaoOperacao onClick={() => this.handleOperacao('*')} valor={'*'}/>
                    <BotaoNumerico onClick={() => this.handleNumClick('1')} valor={1}/>
                    <BotaoNumerico onClick={() => this.handleNumClick('2')} valor={2}/>
                    <BotaoNumerico onClick={() => this.handleNumClick('3')} valor={3}/>
                    <BotaoOperacao onClick={() => this.handleOperacao('-')} valor={'-'}/>
                    <BotaoNumerico onClick={() => this.handleNumClick('0')} valor={0}/>
                    <BotaoOperacao onClick={() => this.handleNumClick('.')} valor={'.'}/>
                    <BotaoOperacao onClick={() => this.calcularResultado()} valor={'='}/>
                    <BotaoOperacao onClick={() => this.handleOperacao('+')} valor={'+'}/>     
                </div>
            </div>
        );
    }
}