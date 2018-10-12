import React from 'react';
import './schedule.css';

export const Schedule = () => {
    return (
        <section className="schedule">
          <div className="schedule__toggle">
              <div className="schedule__toggle-button"/>
          </div>
            <div className="schedule__dot-line">
                <div className="schedule__dot">
                    <div className="schedule__info">
                        <p className="schedule__paragraph">
                            Vertrokken uit distributiecentrum
                        </p>
                        <p className="schedule__paragraph schedule__paragraph--time">
                            15:00
                        </p>
                    </div>
                </div>
                <div className="schedule__line" />
                <div className="schedule__dot">
                    <div className="schedule__info">
                        <p className="schedule__paragraph">Klant 1</p>
                        <p className="schedule__paragraph schedule__paragraph--time">
                            15:30
                        </p>
                    </div>
                </div>
                <div className="schedule__line schedule__line--half" />
                <div className="schedule__line schedule__line--half schedule__line--grey" />
                <div className="schedule__dot schedule__dot--grey">
                    <div className="schedule__info">
                        <p className="schedule__paragraph">Klant 2</p>
                        <p className="schedule__paragraph schedule__paragraph--time">
                            16:00
                        </p>
                    </div>
                </div>
                <div className="schedule__line schedule__line--grey" />
                <div className="schedule__dot schedule__dot--black schedule__dot--square">
                    <div className="schedule__info">
                        <p className="schedule__paragraph">
                            Aflevering op lokatie
                        </p>
                        <p className="schedule__paragraph schedule__paragraph--time">
                            16:00
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};
