import React from 'react';
const star = require('../components/assets/icon--star--filled.svg');
const starFilled = require('../components/assets/icon--star.svg');

const stars = [1, 2, 3, 4, 5];

export const Rating = () => {
    return (
        <div>
            <p>Rate your driver</p>
            <div
                style={{
                    backgroundImage:
                        "url('http://rapradar.com/wp-content/uploads/2013/09/gucci.jpg')",
                    backgroundSize: 'cover',
                    width: '100px',
                    height: '100px',
                }}
            />
            {stars.map(s => (
                <img
                    src={starFilled}
                    value="1"
                    onClick={e => console.log('ja', e.currentTarget.value)}
                />
            ))}

            {/* <img
                style={{ borderRadius: '50%', width: '100px', height: '100px' }}
                src="http://maatwatdoejij.nl/side.jpeg"
            /> */}
        </div>
    );
};
