import React, { Component } from 'react';
import './styles.css';

export default class Calculator extends Component {
    render() {
        return (
            <div className="form-calculadora">
                <div className="display">
                    <label>100</label>
                </div>
                <div className="teclado">
                    <div className="teclado-numerico">
                        <div className="horizontal">
                            <button>1</button>
                            <button>2</button>
                            <button>3</button>
                        </div>
                        <div className="horizontal">
                            <button>4</button>
                            <button>5</button>
                            <button>6</button>
                        </div>
                        <div className="horizontal">
                            <button>7</button>
                            <button>8</button>
                            <button>9</button>
                        </div>
                    </div>
                    <div className="teclado-operacao"></div>
                </div>
                
            </div>
        );
    }
}