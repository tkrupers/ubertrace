import React from 'react';
import './driver.css';

const imgSrc = require('./assets/driver.png');

export const Driver = ({ noCaret }) => (
    <section className="driver">
        <figure className="driver__avatar">
            <img src={imgSrc} alt="driver" />
        </figure>{' '}
        <main className="driver__meta">
            <h4>DRIVER:</h4>
            <h3>Roberto</h3>
            <p>
                <i className="fas fa-star" /> 4.73/5
            </p>
        </main>
        {!noCaret && (
            <aside className="driver__caret">
                <i className="fas fa-caret-right" />
            </aside>
        )}
    </section>
);
