import React, { Component } from 'react';
import { MyMap } from './components/my-map/my-map';
import Tracker from './components/tracker/tracker';
import { subscribeToTracker } from './api';
import Modal from 'react-modal';
import { RatingComponent } from './components/rating/rating';
import { DriverInformation } from './components/rating/driverInformation';

import './App.css';

Modal.setAppElement('#root');

const loader = require('./components/assets/loadering.gif');
const customStyles = {
    content: {
        top: '40px',
        left: '0',
        right: '0',
        bottom: '0',
    },
};

class App extends Component {
    constructor() {
        super();
        subscribeToTracker((err, data) => this.setState({ tracker: data }));
        this.tracker = new Tracker();
    }

    openModal = () => {
        this.setState({ modalIsOpen: true });
    };

    closeModal = () => {
        this.setState({ modalIsOpen: false });
    };

    state = {
        messages: [],
        tracker: {},
        modalIsOpen: false,
    };

    async componentDidMount() {
        try {
            this.tracker.createTracker();
            this.tracker.startTracker(1);

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

        if (!long && !lang) {
            return (
                <>
                    <figure
                        style={{
                            position: 'absolute',
                            zIndex: '1',
                            background: 'rgba(255,255,255,0.5)',
                            width: '100%',
                            height: '100%',
                            textAlign: 'center',
                            margin: 0,
                        }}
                    >
                        <img src={loader} alt="loader" />
                    </figure>
                </>
            );
        }

        return (
            <div>
                <button onClick={this.openModal}>Open Modal</button>

                <MyMap
                    latLngArr={[
                        [lang, long],
                        [52.4, 4.7],
                        [52.42, 4.75],
                        [52.45, 4.66],
                    ]}
                />
                <Modal
                    isOpen={this.state.modalIsOpen}
                    onRequestClose={this.closeModal}
                    contentLabel="Example Modal"
                    style={customStyles}
                >
                    <button onClick={this.closeModal}>Close Modal</button>
                    <DriverInformation />
                    <RatingComponent />
                </Modal>
            </div>
        );
    }
}

export default App;
