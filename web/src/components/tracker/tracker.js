import { getDistanceFromLatLonInKm } from '../my-map/my-map';
const mock = require('./mockData');

export default class Tracker {
    constructor() {
        this.mock = mock;
    }

    fetch = (url, method, body) =>
        fetch(url, {
            method,
            cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            credentials: 'same-origin', // include, same-origin, *omit
            headers: {
                'Content-Type': 'application/json; charset=utf-8',
            },
            body,
        });

    createTracker() {
        return setTimeout(
            () =>
                this.fetch('/api/trace', 'POST', JSON.stringify(this.mock[0])),
            1000,
        );
    }

    getStepsBetweenPoints(a, b) {
        if (b === undefined) return [a];

        const result = [];
        const steps = 100;
        result.push(a);

        const langDiff = (a.lang - b.lang) / steps;
        const longDiff = (a.long - b.long) / steps;

        for (let i = 0; i < steps; i++) {
            const long = result[i].long + longDiff;
            const lang = result[i].lang + langDiff;
            result.push({
                long,
                lang,
            });
        }

        return result.reverse();
    }

    getGeoLocation = (location, idx) =>
        setTimeout(
            () =>
                this.fetch(
                    `/api/trace?id=1`,
                    'PUT',
                    JSON.stringify(location),
                ),
            500 * (idx + 1),
        );

    startTracker(id) {
        this.id = id;
        const totalRoute = [];

        this.mock.forEach((location, idx) => {
            const steps = this.getStepsBetweenPoints(
                location,
                this.mock[idx + 1],
            );

            totalRoute.push(...steps);
        });

        totalRoute.forEach((location, idx) => this.getGeoLocation(location, idx));
    }
}
