import 'aframe';
import {Entity} from 'aframe-react';
import React, {Component} from 'react';

class Panel extends Component {

    constructor(props) {
        super(props);
        this.state = {
            color: 'blue',
            text: this.props.text,
            row: this.props.row,
            col: this.props.col
        }
    }
    handleEnter(){
        this.setState({
            color: 'green'
        });
    }

    handleLeave(){
        this.setState({
            color: 'blue'
        });
    }

    calcPos(){
        var x = (parseInt(this.state.col) * 2.5) - 2.5;
        var y = 4.5 - (parseInt(this.state.row) * 1.5);
        return x + ' ' + y + ' -4';
    }

    render(){
        return (
            <Entity
            class='selectable'
            events={{
                mouseenter: this.handleEnter.bind(this),
                mouseleave: this.handleLeave.bind(this),
                click: this.props.clickFunc
            }}
            geometry={{primitive: 'plane', width: 2, height: 1}}
            position={this.calcPos()}
            material={{color: this.state.color}}
            text={{value: this.state.text, align: 'center', wrapCount: 10}}></Entity>
        )
    }
}

export default Panel;