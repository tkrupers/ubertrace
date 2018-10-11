const mock = require('./mockData');

export default class Tracker {
  constructor() {
    this.mock = mock;
  }

  startTracker(cb) {
    this.mock.forEach((location, index) => {
      setTimeout(() => fetch('/api/trace?id=1', {
          method: 'PUT',
          cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
          credentials: "same-origin", // include, same-origin, *omit
          headers: {
              "Content-Type": "application/json; charset=utf-8",
          },
          body: JSON.stringify(location)
        }), 1000 * (index + 1));
    });
  }
}
