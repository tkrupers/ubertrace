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
       return setTimeout(() => this.fetch('/api/trace', 'POST', JSON.stringify(this.mock[0])), 1000);
    }

    startTracker(id) {
        return this.mock.forEach((location, index) => {
            return setInterval(
                () =>
                    this.fetch(
                        `/api/trace?id=${id}`,
                        'PUT',
                        JSON.stringify(location),
                    ),
                1000 * (index + 1),
            );
        });
    }
}
