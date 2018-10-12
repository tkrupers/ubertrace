import React, { Component } from 'react';
import { MyMap } from './components/my-map/my-map';
import { Router } from '@reach/router';
import { Rating } from './screens/rate';
import Tracker from './components/tracker/tracker';
import { subscribeToTracker } from './api';
class App extends Component {
    constructor() {
        super();
        subscribeToTracker((err, data) => this.setState({ tracker: data }));
        this.tracker = new Tracker();
    }

    state = {
        messages: [],
        tracker: {},
    };

    async componentDidMount() {
        try {
            const res = await this.tracker.createTracker();
            const tracker = await res.json();

            this.tracker.startTracker(tracker.id);

            const response = await fetch('/api/trace');
            const messages = await response.json();
            this.setState({ messages });
        } catch (e) {
            console.error(e);
        }
    }

    render() {
        const { tracker } = this.state;
        const [id, long, lang] = Object.values(tracker);

        return (
            <Router>
                <MyMap
                    latLngArr={[
                        lang && long ? [lang, long] : [50.4, 4.7],
                        [52.4, 4.7],
                        [52.42, 4.75],
                        [52.45, 4.66],
                    ]}
                />
                <Rating path="rating" />
            </Router>
        );
    }
}

export default App;
