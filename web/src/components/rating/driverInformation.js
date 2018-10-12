import React, { Component } from 'react';
require('./rating.scss');
export const DriverInformation = () => {
    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'row',
                width: '100%',
            }}
        >
            <div
                className="haha"
                style={{
                    backgroundImage:
                        "url('http://rapradar.com/wp-content/uploads/2013/09/gucci.jpg')",
                    backgroundSize: 'cover',
                    width: '100px',
                    alignSelf: 'center',
                    height: '100px',
                    borderRadius: '50%',
                }}
            />
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                }}
            >
                <p style={{}}>Bezorger</p>
                <p>Roberto van Geleense</p>
                <p>4.37/5</p>
            </div>
        </div>
    );
};
