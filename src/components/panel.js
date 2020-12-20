import 'aframe';
import React, {Component} from 'react';

class Panel extends Component {

    render(){
        return (
            <a-entity
            geometry="primitive: plane; width: 4; height: 4"
            position="0 0 -4"
            material="color: blue"
            text="value: Testing Text; align: center"></a-entity>
        )
    }
}

export default Panel;