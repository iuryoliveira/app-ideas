import React, { Component } from 'react'
import './styles.css';

export default class Box extends Component {
    state = {
        margin: '20px',
        width: '250px',
        height: '250px',
        backgroundColor: 'red',
        topLeft: '25px',
        topRight: '25px',
        bottomRight: '25px',
        bottomLeft: '25px'
    }

    handleBorderChange = (side, event) => {
        switch(side) {
            case 'topRight':
                this.setState({topRight: event.target.value});
            break;
            case 'topLeft':
                this.setState({topLeft: event.target.value});
            break;
            case 'bottomRight':
                this.setState({bottomRight: event.target.value});
            break;
            case 'bottomLeft':
                this.setState({bottomLeft: event.target.value});
            break;
            default:
            break;
        }
        
    }

    copyCodeToClipboard = () => {
        const el = this.textArea;
        el.select()
        document.execCommand("copy")
      }

    render() {
        const { margin, width, height, backgroundColor, topLeft, topRight, bottomRight, bottomLeft } = this.state;
        return(
            <div id="box-form">
                <label>Top Right:</label><input type="text" value={topRight} onChange={event => this.handleBorderChange('topRight', event)}/><br />
                <label>Top Left:</label><input type="text" value={topLeft} onChange={event => this.handleBorderChange('topLeft', event)} /><br />
                <label>Bottom Right:</label><input type="text" value={bottomRight} onChange={event => this.handleBorderChange('bottomRight', event)}/><br />
                <label>Bottom Right:</label><input type="text" value={bottomLeft} onChange={event => this.handleBorderChange('bottomLeft', event)}/><br />
                
                <div id="box" 
                    style={{
                            margin,
                            width,
                            height,
                            backgroundColor,
                            borderRadius: `${topLeft} ${topRight} ${bottomRight} ${bottomLeft}`
                        }}>
                </div>
                <textarea
                    ref={(textarea) => this.textArea = textarea}
                    value={`${JSON.stringify(this.state)}`}
                />
                <button id="clipBoard" onClick={this.copyCodeToClipboard}>Copy to clipboard</button>
            </div>
        );
    }
}