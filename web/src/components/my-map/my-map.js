import React, { Component, Fragment } from 'react';
import { Map, TileLayer, CircleMarker } from 'react-leaflet';
import { AHVan } from '../ah-van/ah-van';

const MyMarkersList = ({ markers }) => {
    const items = markers.map((latLng, index) => (
        <CircleMarker key={index} center={latLng} radius={30} />
    ));
    return <Fragment>{items}</Fragment>;
};

export const MyMap = ({ latLngArr }) => {
    return (
        <Map center={[51.505, -0.09]} zoom={13} style={{ height: '500px' }}>
            <TileLayer
                attribution="&amp;copy <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <MyMarkersList markers={latLngArr} />
            <AHVan position={latLngArr[0]} rotation={45} />
        </Map>
    );
};
