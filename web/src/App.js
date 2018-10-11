import React, { Component } from 'react';
import { DivIconMarkerExample } from './components/divicon-marker-example';
import Tracker from './components/Tracker/Tracker';

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
        return <DivIconMarkerExample />;
    }
}

export default App;
