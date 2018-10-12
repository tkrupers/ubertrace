import React, { Component, Fragment } from 'react';
import { Map, TileLayer, CircleMarker } from 'react-leaflet';
import { AHVan } from './ah-van';

const MyMarkersList = ({ markers }) => {
    const items = markers.map(({ key, position }) => (
        <CircleMarker key={key} center={position} radius={30} />
    ));
    return <Fragment>{items}</Fragment>;
};

export class MyMap extends Component {
    state = {
        markers: [
            {
                key: 'marker1',
                position: [51.5, -0.1],
                content: 'My first popup',
            },
            {
                key: 'marker2',
                position: [51.51, -0.1],
                content: 'My second popup',
            },
            {
                key: 'marker3',
                position: [51.49, -0.05],
                content: 'My third popup',
            },
        ],
    };

    render() {
        return (
            <Map center={[51.505, -0.09]} zoom={13} style={{ height: '500px' }}>
                <TileLayer
                    attribution="&amp;copy <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <MyMarkersList markers={this.state.markers} />
                <AHVan position={[51.52, -0.05]} rotation={45} />
            </Map>
        );
    }
}
