import React, { Component } from 'react';
import { MyMap } from './components/my-map/my-map';
import Tracker from './components/tracker/tracker';
import { subscribeToTracker } from './api';
import Modal from 'react-modal';
import { RatingComponent } from './components/rating/rating';

Modal.setAppElement('#root');

const loader = require('./components/assets/loadering.gif');
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
            const id = await this.tracker.createTracker();

            this.tracker.startTracker(id);

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
                        <img src={loader} alt="loader"/>
                    </figure>
                    <MyMap latLngArr={[[50.4, 4.7]]} />
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
                >
                    <button onClick={this.closeModal}>Close Modal</button>

                    <RatingComponent />
                </Modal>
            </div>
        );
    }
}

export default App;
