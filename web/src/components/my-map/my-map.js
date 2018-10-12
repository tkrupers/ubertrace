import React, { Fragment } from 'react';
import { Map, TileLayer, CircleMarker, Polyline } from 'react-leaflet';
import { AHVan } from '../ah-van/ah-van';

// https://stackoverflow.com/a/27943
function getDistanceFromLatLonInKm(lat1, lon1, lat2, lon2) {
    var R = 6371; // Radius of the earth in km
    var dLat = deg2rad(lat2 - lat1); // deg2rad below
    var dLon = deg2rad(lon2 - lon1);
    var a =
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(deg2rad(lat1)) *
            Math.cos(deg2rad(lat2)) *
            Math.sin(dLon / 2) *
            Math.sin(dLon / 2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    var d = R * c; // Distance in km
    return d;
}

function deg2rad(deg) {
    return deg * (Math.PI / 180);
}

const getAngle = latLngArr => {
    const x = getDistanceFromLatLonInKm(
        latLngArr[1][0],
        latLngArr[0][1],
        latLngArr[0][0],
        latLngArr[0][1],
    );

    const y = getDistanceFromLatLonInKm(
        latLngArr[0][0],
        latLngArr[1][1],
        latLngArr[0][0],
        latLngArr[0][1],
    );

    const angle =
        Math.atan2(
            latLngArr[1][1] > latLngArr[0][1] ? y : -y,
            latLngArr[1][0] > latLngArr[0][0] ? x : -x,
        ) *
        180 /
        Math.PI;

    return angle;
};

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
        <Map
            center={latLngArr[0]}
            zoom={11}
            style={{ height: '500px', zIndex: 0 }}
        >
            <TileLayer
                attribution="&amp;copy <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Polyline positions={latLngArr} color="#3b9fe2" />
            <MyMarkersList markers={latLngArr} />
            <AHVan position={latLngArr[0]} rotation={getAngle(latLngArr)} />
        </Map>
    );
};
