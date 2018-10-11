import React, { Component } from 'react';
import { DivIconMarkerExample } from './components/divicon-marker-example';

class App extends Component {
    state = {
        messages: [],
    };

    async componentDidMount() {
        try {
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
