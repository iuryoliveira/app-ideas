import React, { Component } from 'react';
import './styles.css';

export default class BotaoNumerico extends Component {
    render() {
        const { valor, onClick } = this.props;
        return (
        <button onClick={onClick} className="botao-numerico">{valor}</button>
        );
    }
}