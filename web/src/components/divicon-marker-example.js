import React, { Component, Fragment } from 'react';
import { Map, TileLayer, CircleMarker } from 'react-leaflet';
import { AHVan } from './ah-van';

const MyMarkersList = ({ markers }) => {
    const items = markers.map(({ key, position }) => (
        <CircleMarker key={key} center={position} radius={30} />
    ));
    return <Fragment>{items}</Fragment>;
};

export class DivIconMarkerExample extends Component {
    state = {
        markers: [
            {
                key: 'marker1',
                position: [52.435920583590125, 4.7893524169921875],
                content: 'My first popup',
            },
            {
                key: 'marker2',
                position: [52.5, 4.8],
                content: 'My second popup',
            },
            {
                key: 'marker3',
                position: [52.49, 4.7],
                content: 'My third popup',
            },
        ],
    };

    render() {
        return (
            <Map center={[52.43926935464697, 4.8195648193359375]} zoom={11} style={{ height: '500px' }}>
                <TileLayer
                    attribution="&amp;copy <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <MyMarkersList markers={this.state.markers} />
                <AHVan position={[52.5, 4.7]} rotation={45} />
            </Map>
        );
    }
}
