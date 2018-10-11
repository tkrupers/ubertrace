import React, { Component } from 'react';

class App extends Component {
    state = {
        messages: [],
    };

    async componentDidMount() {
        try {
        const response = await fetch('/api/track');
        const messages = await response.json();
        this.setState({ messages });

        } catch (e) {
            console.error(e);
        }
    }

    render() {
        const { messages } = this.state;
        return (
            <div className="app">
                <h1>Messages</h1>
                {messages};
            </div>
        );
    }
}

export default App;
