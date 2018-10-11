const mock = require('./mockData');

export default class Tracker {
  constructor() {
    this.mock = mock;
  }

  startTracker(cb) {
    this.mock.forEach((location, index) => {
      setTimeout(() => cb(location), 1000 * (index + 1));
    });
  }
}
