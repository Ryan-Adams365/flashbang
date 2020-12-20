import 'aframe';
import {Entity} from 'aframe-react';
import React, {Component} from 'react';

class Panel extends Component {

    constructor(props) {
        super(props);
        this.state = {
            color: 'blue',
            text: this.props.text
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

    render(){
        return (
            <Entity
            class='selectable'
            events={{
                mouseenter: this.handleEnter.bind(this),
                mouseleave: this.handleLeave.bind(this)
            }}
            geometry={{primitive: 'plane', width: 2, height: 1}}
            position='0 2 -4'
            material={{color: this.state.color}}
            text={{value: this.state.text, align: 'center', wrapCount: 10}}></Entity>
        )
    }
}

export default Panel;