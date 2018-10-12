import React from 'react';
import { Timeline } from './timeline/timeline';
import { Driver } from '../driver/driver';
import './schedule.css';

export class Schedule extends React.Component {
    state = {
        isOpen: false,
    };

    render() {
        const { openModal } = this.props;

        return (
            <section
                className="schedule"
                style={{
                    transform: this.state.isOpen
                        ? 'translateY(0px)'
                        : 'translateY(400px)',
                }}
            >
                <div className="schedule__toggle">
                    <div
                        className="schedule__toggle-button"
                        onClick={() =>
                            {
                                this.props.scheduleOpen();
                                this.setState({ isOpen: !this.state.isOpen })
                            }
                        }
                    ><i className={`fas fa-chevron-circle-${this.state.isOpen ? 'down' : 'up'}`}></i></div>
                </div>
                <div className="schedule__content">
                    <div onClick={openModal}>
                        <Driver />
                    </div>

                    <Timeline />

                    <button className="button button-primary">
                        bericht sturen
                    </button>
                </div>
            </section>
        );
    }
}
