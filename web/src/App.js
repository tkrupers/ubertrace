import React, { Component } from 'react';

import Tracker from './components/Tracker/Tracker';
import { MyMap } from './components/my-map/my-map';

class App extends Component {
    state = {
        messages: [],
    };

    async componentDidMount() {
        try {
            const tracker = new Tracker();
            tracker.startTracker();
            const response = await fetch('/api/trace');
            const messages = await response.json();
            this.setState({ messages });
        } catch (e) {
            console.error(e);
        }
    }

    render() {
        return <MyMap latLngArr={[[51.52, -0.05], [51.5, -0.1], [51.51, -0.1], [51.49, -0.05]]} />;
    }
}

export default App;
