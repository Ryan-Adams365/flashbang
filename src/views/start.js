import 'aframe';
import {Entity} from 'aframe-react';
import React, {Component} from 'react';
import Panel from '../components/panel';

class Start extends Component {
    render(){
        return(
            <Entity>
                <Panel text='Start' clickFunc={this.props.funcs.gotoDeckSelect} row='2' col='1' />
            </Entity>
        )
    }
}

export default Start;