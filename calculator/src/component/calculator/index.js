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
                    <div className="teclado-numerico">
                        <BotaoNumerico onClick={() => this.handleNumClick(1)} valor={1}/>
                        <BotaoNumerico onClick={() => this.handleNumClick(2)} valor={2}/>
                        <BotaoNumerico onClick={() => this.handleNumClick(3)} valor={3}/>
                        <BotaoNumerico onClick={() => this.handleNumClick(4)} valor={4}/>
                        <BotaoNumerico onClick={() => this.handleNumClick(5)} valor={5}/>
                        <BotaoNumerico onClick={() => this.handleNumClick(6)} valor={6}/>
                        <BotaoNumerico onClick={() => this.handleNumClick(7)} valor={7}/>
                        <BotaoNumerico onClick={() => this.handleNumClick(8)} valor={8}/>
                        <BotaoNumerico onClick={() => this.handleNumClick(9)} valor={9}/>
                        <div className="last-item">
                            <button  className="last-button" onClick={() => this.handleNumClick(0)}>0</button>
                        </div>
                    </div>
                    
                    <div className="teclado-operacao">
                        <BotaoOperacao onClick={() => this.handleOperacao('+')} valor={'+'}/>
                        <BotaoOperacao valor={'-'}/>
                        <BotaoOperacao valor={'*'}/>
                        <BotaoOperacao valor={'/'}/>
                    </div>
                </div>
                <button className="calcular">=</button>
            </div>
        );
    }
}