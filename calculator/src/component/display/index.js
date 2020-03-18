import React, { Component } from 'react';
import './styles.css';

export default class Display extends Component {
    render() {
        const { valor } = this.props;

        return (
            <div className="display">
                <label>{valor}</label>
            </div>
        );
    }
}