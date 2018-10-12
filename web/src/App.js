import React, { Component } from 'react';
import { MyMap } from './components/my-map/my-map';
import { Router, Link } from '@reach/router';
import { Rating } from './screens/rate';
import Modal from 'react-modal';
import { RatingComponent } from './components/rating/rating';

// Make sure to bind modal to your appElement (http://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement('#root');

class App extends Component {
    state = {
        modalIsOpen: false,
    };
    openModal = () => {
        this.setState({ modalIsOpen: true });
    };

    closeModal = () => {
        this.setState({ modalIsOpen: false });
    };

    render() {
        return (
            <div>
                <button onClick={this.openModal}>Open Modal</button>
                <Modal
                    isOpen={this.state.modalIsOpen}
                    onRequestClose={this.closeModal}
                    contentLabel="Example Modal"
                >
                    <button onClick={this.closeModal}>close</button>
                    <RatingComponent />
                </Modal>
                <MyMap
                    path="/"
                    latLngArr={[
                        [51.52, -0.05],
                        [51.5, -0.1],
                        [51.51, -0.1],
                        [51.49, -0.05],
                    ]}
                />
            </div>
        );
    }
}

export default App;
