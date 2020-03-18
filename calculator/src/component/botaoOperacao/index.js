import React, { Component } from 'react';
import './styles.css';

export default class BotaoOperacao extends Component {
    render() {
        const { valor, onClick } = this.props;
        return (
        <button onClick={onClick} className="botao-operacao">{valor}</button>
        );
    }
}