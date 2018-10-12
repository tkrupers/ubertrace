import React from 'react';
const star = require('../../components/assets/icon--star--filled.svg');
const starFilled = require('../../components/assets/icon--star.svg');

const stars = [1, 2, 3, 4, 5];

export const Star = ({ value, handleClick, isActive }) => {
    return (
        <img
            src={isActive ? star : starFilled}
            onClick={() => handleClick(value)}
            key={value}
        />
    );
};

class Stars extends React.Component {
    state = {
        selected: 5,
    };

    handleClick = e => {
        this.setState({
            selected: e,
        });
    };
    render() {
        return (
            <div style={{ flexDirection: 'row', padding: '44px 0' }}>
                {stars.map(s => (
                    <Star
                        key={s}
                        value={s}
                        handleClick={this.handleClick}
                        isActive={this.state.selected >= s}
                    />
                ))}
            </div>
        );
    }
}

export const RatingComponent = () => {
    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                width: '100%',
                textAlign: 'center',
            }}
        >
            <p>Rate your driver</p>
            <div
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
            <Stars />
        </div>
    );
};
