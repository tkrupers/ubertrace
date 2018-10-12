import openSocket from 'socket.io-client';
const socket = openSocket('http://localhost:3031');

function subscribeToTracker(cb) {
    socket.on('api/trace created', data => cb(null, data));
    socket.on('api/trace updated', data => cb(null, data));
    socket.emit('subscribeToTracker', 1000);
  }

export { subscribeToTracker };