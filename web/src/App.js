import React, { Component } from 'react';
import { MyMap } from './components/my-map/my-map';
import Tracker from './components/tracker/tracker';
import { subscribeToTracker } from './api';
import Modal from 'react-modal';
import { RatingComponent } from './components/rating/rating';

import { Schedule } from './components/schedule/schedule';

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
        scheduleOpen: false,
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

    handleMenuY = () =>
        this.setState({ scheduleOpen: !this.state.scheduleOpen });

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
                <div className="deliveryStatus">
                    <div
                        style={{
                            display: 'flex',
                            flexDirection: 'row',
                            background: '#FFF',
                            width: '90%',
                            margin: 'auto',
                            padding: '15px 10px',
                            justifyContent: 'space-between',
                            boxShadow:
                                ' 0 15px 35px rgba(50,50,93,.7), 0 5px 15px rgba(0,0,0,.07)',
                            transform: `${
                                this.state.scheduleOpen || this.state.modalIsOpen
                                    ? 'translateY(-110px)'
                                    : 'translateY(0)'
                            }`,
                            transition: 'transform 0.3s ease',
                        }} // height: '4em',
                    >
                        <div className="status-row">
                            <p className="small">AANKOMST</p>
                            <p>16:45</p>
                        </div>
                        <div className="status-row">
                            <p className="small">KLANTEN VOOR U</p>
                            <p>2</p>
                        </div>
                        <div
                            className="status-row"
                            style={{
                                marginTop: '13px',
                                color: '#5AB0FD',
                            }}
                        >
                            <p>Tips</p>
                        </div>
                    </div>
                </div>
                <MyMap
                    latLngArr={[
                        [lang, long],
                        [52.4, 4.7],
                        [52.42, 4.75],
                        [52.45, 4.66],
                    ]}
                />

                <Schedule
                    openModal={this.openModal}
                    scheduleOpen={this.handleMenuY}
                />

                <Modal
                    isOpen={this.state.modalIsOpen}
                    onRequestClose={this.closeModal}
                    contentLabel="Example Modal"
                    style={customStyles}
                >
                    <button
                        style={{ float: 'right' }}
                        onClick={this.closeModal}
                    >
                        <i
                            className="fas fa-times"
                            style={{ fontSize: '24px' }}
                        />
                    </button>

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
