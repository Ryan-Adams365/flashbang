import 'aframe';
import {Entity} from 'aframe-react';
import React, {Component} from 'react';
import Panel from '../components/panel';

class Game extends Component {

    addHit = () => {
        this.props.funcs.gotoGame(
            this.props.deck,
            this.props.gameData.round + 1,
            this.props.gameData.hits + 1,
            this.props.gameData.misses
        );
    }

    addMiss = () => {
        this.props.funcs.gotoGame(
            this.props.deck,
            this.props.gameData.round + 1,
            this.props.gameData.hits,
            this.props.gameData.misses + 1
        );
    }

    generateRound = () => {
        if(this.props.deck.questions.length === this.props.gameData.round){
            return (
                <Panel text='End' clickFunc={this.props.funcs.gotoStart} row='2' col='1' />
            )
        } else {
            return (
                <Entity>
                    <Panel text={this.props.deck.questions[this.props.gameData.round]} row='1' col='1' />
                    <Panel text='Wrong' clickFunc={this.addMiss} row='2' col='0' />
                    <Panel text={this.props.deck.answers[this.props.gameData.round]} clickFunc={this.addHit} row='2' col='1' />
                    <Panel text='Wrong' clickFunc={this.addMiss} row='2' col='2' />
                </Entity>
            )
        }
    }

    render(){
        console.log(this.props.gameData.hits);
        return(
            <Entity>
                <Panel text={'Hits:\n' + this.props.gameData.hits.toString()} row='0' col='0' />
                <Panel text={this.props.deck.name + '\nCards: ' + this.props.deck.questions.length} row='0' col='1' />
                <Panel text={'Misses:\n' + this.props.gameData.misses.toString()} row='0' col='2' />
                {this.generateRound()}
            </Entity>
        )
    }
}

export default Game;