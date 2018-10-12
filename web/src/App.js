import React, { Component } from 'react';
import { MyMap } from './components/my-map/my-map';

class App extends Component {
    render() {
        return <MyMap latLngArr={[[51.52, -0.05], [51.5, -0.1], [51.51, -0.1], [51.49, -0.05]]} />;
    }
}

export default App;
