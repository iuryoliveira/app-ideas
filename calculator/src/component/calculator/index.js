import React, { Component } from 'react';
import Display from '../display';
import BotaoNumerico from '../botaoNumerico';
import BotaoOperacao from '../botaoOperacao';
import './styles.css';

export default class Calculator extends Component {
    state = {
        valorDisplay: '',
        operacoes: [],
        valores: [],
        resultadoParcial: 0,
        operacaoParcialRealizada: false,
        ultimoNumero: 0,
    }

    handleNumClick = async (valor) => {
        let { valorDisplay } = this.state;
        if(valorDisplay.length < 8) {
            valorDisplay += valor;
            await this.setState({ valorDisplay });
        }
    }

    salvarOperacao = async (operacao) => {
        let { operacoes, valores, valorDisplay, resultadoParcial, operacaoParcialRealizada, ultimoNumero } = this.state;
        if(valorDisplay != '') {

            operacoes.push(operacao);

            if(!operacaoParcialRealizada) {
                valores.push(parseFloat(valorDisplay));
            } else {
                valores.push(ultimoNumero);
            }

            if(operacoes.length === 1) {
                resultadoParcial = parseFloat(valorDisplay);
            } else if(operacoes.length > 1) {
                if(operacoes[operacoes.length - 2] === '+') resultadoParcial += valores[valores.length - 1];
                else if(operacoes[operacoes.length - 2] === '-') resultadoParcial -= valores[valores.length - 1];
                else if(operacoes[operacoes.length - 2] === '*') resultadoParcial *= valores[valores.length - 1];
                else if(operacoes[operacoes.length - 2] === '/') resultadoParcial /= valores[valores.length - 1];
            }

            await this.setState({ operacoes, valores, valorDisplay: '', resultadoParcial, operacaoParcialRealizada: false });
        } 
    }

    calcularResultado = async () => {
        let { operacoes, valores, valorDisplay, resultadoParcial } = this.state;
        
        let ultimoValor = parseFloat(valorDisplay);
        valores.push(ultimoValor);

        if(operacoes[operacoes.length - 1] === '+') resultadoParcial += ultimoValor;

        else if(operacoes[operacoes.length - 1] === '-') resultadoParcial -= ultimoValor;

        else if(operacoes[operacoes.length - 1] === '*') resultadoParcial *= ultimoValor;

        else if(operacoes[operacoes.length - 1] === '/') resultadoParcial /= ultimoValor;

        await this.setState({ operacoes: [], valores: [], valorDisplay: resultadoParcial, resultadoParcial });   
    }

    calculoParcial = async () => {
        let { valores, operacoes, valorDisplay, resultadoParcial, ultimoNumero} = this.state;
        
        if (valores.length > 0 && operacoes.length > 0) {
            let valorTemporario = parseFloat(valorDisplay);

            if(operacoes[operacoes.length - 1] === '+') resultadoParcial += valorTemporario;

            else if(operacoes[operacoes.length - 1] === '-') resultadoParcial -= valorTemporario;

            else if(operacoes[operacoes.length - 1] === '*') resultadoParcial *= valorTemporario;

            else if(operacoes[operacoes.length - 1] === '/') resultadoParcial /= valorTemporario;

            await this.setState({ valorDisplay: resultadoParcial, operacaoParcialRealizada: true, ultimoNumero: valorTemporario });
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
        await this.setState({ operacoes: [], valores: [], valorDisplay: '', resultadoParcial: 0 });   
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