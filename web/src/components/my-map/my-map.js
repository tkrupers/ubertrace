import React, { Fragment } from 'react';
import { Map, TileLayer, CircleMarker, Polyline } from 'react-leaflet';
import { AHVan } from '../ah-van/ah-van';

const MyMarkersList = ({ markers }) => {
    const items = markers
        .slice(1)
        .map((latLng, index) => (
            <CircleMarker
                key={index}
                center={latLng}
                radius={8}
                color="#3b9fe2"
                weight={7}
                fillColor="#fff"
                fillOpacity={1}
            />
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
            <Polyline positions={latLngArr} color="#3b9fe2" />
            <MyMarkersList markers={latLngArr} />
            <AHVan position={latLngArr[0]} rotation={45} />
        </Map>
    );
};
