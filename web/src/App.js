import React, { Component } from 'react';
import { MyMap } from './components/my-map/my-map';
import Tracker from './components/tracker/tracker';
import { subscribeToTracker } from './api';
import Modal from 'react-modal';
import { RatingComponent } from './components/rating/rating';
import { DriverInformation } from './components/rating/driverInformation';

// import './app.scss';

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

    render() {
        const { tracker } = this.state;
        const [id, long, lang] = Object.values(tracker);

        return (
            <div>
                <button onClick={this.openModal}>Open Modal</button>

                <Modal
                    isOpen={this.state.modalIsOpen}
                    onRequestClose={this.closeModal}
                    contentLabel="Example Modal"
                    style={customStyles}
                >
                    <DriverInformation />
                    <RatingComponent />
                    <button className="send-button" onClick={this.closeModal}>
                        versturen
                    </button>
                </Modal>
            </div>
        );
    }
}

export default App;
