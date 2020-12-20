import 'aframe';
import React, {Component} from 'react';
import Panel from './components/panel';

class App extends Component{
  render() {
    return(
      <a-scene>
        <Panel />
        <a-entity laser-controls="hand: left"></a-entity>
        <a-entity laser-controls="hand: right"></a-entity>
      </a-scene>
    );
  }
}

export default App;
