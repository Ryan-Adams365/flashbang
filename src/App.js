import 'aframe';
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
      view: 'start'
    };
  }

  selectView() {
    if(this.state.view === 'start'){
      return (<Start />);
    } else if(this.state.view === 'deckSelect'){
      return (<DeckSelect />);
    } else {
      return (<Game />);
    }
  }

  render() {
    var currentView = this.selectView();
    return(
      <Scene>
        <Entity laser-controls={{hand: 'left'}} raycaster={{objects: '.selectable'}}></Entity>
        <Entity laser-controls={{hand: 'right'}} raycaster={{objects: '.selectable'}}></Entity>
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
