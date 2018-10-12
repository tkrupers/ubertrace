import React, { Component } from 'react';
require('./rating.css');
export const DriverInformation = () => {
    return (
        <div className="driver-information">
            <div
                style={{
                    backgroundImage:
                        "url('http://rapradar.com/wp-content/uploads/2013/09/gucci.jpg')",
                    backgroundSize: 'cover',
                    width: '100px',
                    alignSelf: 'center',
                    height: '100px',
                    borderRadius: '50%',
                    marginRight: '32px',
                }}
            />
            <div style={{ display: 'flex', flexDirection: 'column' }}>
                <p style={{ color: '#CCCCCC' }}>Bezorger</p>
                <p style={{ fontSize: '24px', color: '#303030' }}>
                    Roberto van Geleense
                </p>
                <p style={{ color: '#8A8A8A' }}>4.37/5</p>
            </div>
        </div>
    );
};
