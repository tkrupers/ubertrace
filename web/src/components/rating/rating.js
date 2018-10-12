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
                <p>wat vond je van de bezorger?</p>
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
            <Stars />
        </div>
    );
};
