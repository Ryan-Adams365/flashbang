import 'aframe';
import 'aframe-mouse-cursor-component';
import {Entity, Scene} from 'aframe-react';
import React, {Component} from 'react';
import Panel from './components/panel';
import DeckSelect from './views/deckSelect';
import Game from './views/game';
import Start from './views/start';

class App extends Component{

  constructor(){
    super();
    this.state = {
      view: 'start',
      deck: {},
      gameData: {round: 0, hits: 0, misses: 0}
    };
  }

  gotoStart = () => {
    this.setState({
      view: 'start',
      gameData: {round: 0, hits: 0, misses: 0}
    });
  }

  gotoDeckSelect = () => {
    this.setState({
      view: 'deck-select'
    });
  }

  gotoGame = (deck, round, hits, misses) => {
    console.log(this.state);
    this.setState({
      view: 'game',
      deck: deck,
      gameData: {round: round, hits: hits, misses: misses}
    });
  }

  selectView() {
    var functions = {
      gotoStart: this.gotoStart,
      gotoDeckSelect: this.gotoDeckSelect,
      gotoGame: this.gotoGame
    };
    if(this.state.view === 'start'){
      return (<Start funcs={functions} />);
    } else if(this.state.view === 'deck-select'){
      return (<DeckSelect funcs={functions} />);
    } else {
      return (<Game funcs={functions}  deck={this.state.deck} gameData={this.state.gameData} />);
    }
  }

  render() {
    var currentView = this.selectView();
    return(
      <Scene>
        <Entity laser-controls={{hand: 'left'}} raycaster={{objects: '.selectable'}}></Entity>
        <Entity laser-controls={{hand: 'right'}} raycaster={{objects: '.selectable'}}></Entity>
        <Entity cursor={{rayOrigin: 'mouse'}} />
        <Entity
          geometry={{primitive: 'circle', radius: '20'}}
          material={{color: 'gray'}}
          rotation='-90 0 0'
          position='0 -0.1 0'></Entity>
        <Entity
          geometry={{primitive: 'torus', radius: '20'}}
          material={{color: 'gray'}}
          rotation='-90 0 0'></Entity>
        {currentView}
      </Scene>
    );
  }
}

export default App;
