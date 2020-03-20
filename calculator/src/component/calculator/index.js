import React, { Component } from 'react';
import Display from '../display';
import BotaoNumerico from '../botaoNumerico';
import BotaoOperacao from '../botaoOperacao';
import './styles.css';

export default class Calculator extends Component {
    state = {
        valorDisplay: '',
        operacoes: [],
        resultadoParcial: 0,
        ultimoNumero: 0,
    }

    handleClickNumerico = async (valor) => {
        let { valorDisplay } = this.state;
        if(valorDisplay.length < 8) {
            valorDisplay += valor;
            await this.setState({ valorDisplay });
        }
    }

    salvarOperacao = async (operacao) => {
        let { operacoes, valorDisplay, resultadoParcial, ultimoNumero } = this.state;
        if(valorDisplay !== '') {

            operacoes.push(operacao);

            if(operacoes.length === 1) {
                resultadoParcial = parseFloat(valorDisplay);
            } else if(operacoes.length > 1) {
                resultadoParcial = this.calcularOperacao(operacoes[operacoes.length - 2], resultadoParcial, ultimoNumero);
            }

            await this.setState({ operacoes, valorDisplay: '', resultadoParcial });
        } 
    }

    calcularResultado = async () => {
        let { operacoes, valorDisplay, resultadoParcial } = this.state;
        
        let ultimaOperacao = operacoes[operacoes.length - 1];

        let ultimoValor = parseFloat(valorDisplay);

        resultadoParcial = this.calcularOperacao(ultimaOperacao, resultadoParcial, ultimoValor);

        await this.setState({ operacoes: [], valorDisplay: resultadoParcial, resultadoParcial });   
    }

    calculoParcial = async () => {
        let { operacoes, valorDisplay, resultadoParcial } = this.state;

        let ultimaOperacao = operacoes[operacoes.length - 1];

        let valorTemporario = parseFloat(valorDisplay);

        resultadoParcial = this.calcularOperacao(ultimaOperacao, resultadoParcial, valorTemporario);

        await this.setState({ valorDisplay: resultadoParcial, operacaoParcialRealizada: true, ultimoNumero: valorTemporario });
    }

    calcularOperacao = (operacao, totalizador, valor) => {
        switch(operacao) {
            case '+':
                return totalizador + valor;
            case '-':
                return totalizador - valor;
            case '*':
                return totalizador * valor;
            case '/':
                return totalizador / valor;
            default:
                break;
        }
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
        await this.setState({ operacoes: [], valorDisplay: '', resultadoParcial: 0 });   
    }

    handeLimparUltimoNumero = async () => {
        await this.setState({ valorDisplay: '' });
    }

    render() {
        const { valorDisplay } = this.state;
        return (
            <div className="form-calculadora">
                <Display valor={valorDisplay}/>
                <div className="teclado">
                    <BotaoOperacao onClick={() => this.handeLimparUltimoNumero()} valor={'C'}/>
                    <BotaoOperacao onClick={() => this.calculoParcial()}valor={'OP'}/>
                    <BotaoOperacao onClick={() => this.handlePercentual()} valor={'%'}/>
                    <BotaoOperacao onClick={() => this.handleLimparTudo()} valor={'AC'}/>
                    <BotaoNumerico onClick={() => this.handleClickNumerico('7')} valor={7}/>
                    <BotaoNumerico onClick={() => this.handleClickNumerico('8')} valor={8}/>
                    <BotaoNumerico onClick={() => this.handleClickNumerico('9')} valor={9}/>
                    <BotaoOperacao onClick={() => this.handleOperacao('/')} valor={'/'}/>
                    <BotaoNumerico onClick={() => this.handleClickNumerico('4')} valor={4}/>
                    <BotaoNumerico onClick={() => this.handleClickNumerico('5')} valor={5}/>
                    <BotaoNumerico onClick={() => this.handleClickNumerico('6')} valor={6}/>
                    <BotaoOperacao onClick={() => this.handleOperacao('*')} valor={'*'}/>
                    <BotaoNumerico onClick={() => this.handleClickNumerico('1')} valor={1}/>
                    <BotaoNumerico onClick={() => this.handleClickNumerico('2')} valor={2}/>
                    <BotaoNumerico onClick={() => this.handleClickNumerico('3')} valor={3}/>
                    <BotaoOperacao onClick={() => this.handleOperacao('-')} valor={'-'}/>
                    <BotaoNumerico onClick={() => this.handleClickNumerico('0')} valor={0}/>
                    <BotaoOperacao onClick={() => this.handleClickNumerico('.')} valor={'.'}/>
                    <BotaoOperacao onClick={() => this.calcularResultado()} valor={'='}/>
                    <BotaoOperacao onClick={() => this.handleOperacao('+')} valor={'+'}/>     
                </div>
            </div>
        );
    }
}