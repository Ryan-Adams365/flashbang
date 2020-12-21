import 'aframe';
import {Entity} from 'aframe-react';
import React, {Component} from 'react';
import Panel from '../components/panel';

class DeckSelect extends Component {

    startGame = () => {
        var deck = {name: 'Math', questions: ['1 + 1 =', '2 + 2 =', '3 + 3 ='], answers: ['2', '4', '6']};
        this.props.funcs.gotoGame(deck, 0, 0, 0);
    }

    render(){
        return(
            <Entity>
                <Panel text='Return' clickFunc={this.props.funcs.gotoStart} row='1' col='1' />
                <Panel text='Deck 1' clickFunc={this.startGame} row='2' col='0' />
            </Entity>
        )
    }
}

export default DeckSelect;