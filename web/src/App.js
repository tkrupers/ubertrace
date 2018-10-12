import React, { Component } from 'react';
import { MyMap } from './components/my-map/my-map';
import { Router, Link } from '@reach/router';
import { Rating } from './screens/rate';

class App extends Component {
    render() {
        return (
            <Router>
                <MyMap
                    path="/"
                    latLngArr={[
                        [51.52, -0.05],
                        [51.5, -0.1],
                        [51.51, -0.1],
                        [51.49, -0.05],
                    ]}
                />
                <Rating path="rating" />
            </Router>
        );
    }
}

export default App;
