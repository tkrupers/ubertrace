import TrackService from './services/track';

const feathers = require('@feathersjs/feathers');
const express = require('@feathersjs/express');
const socketio = require('@feathersjs/socketio');
const memory = require('feathers-memory');

const app = express(feathers());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.configure(express.rest());
app.configure(socketio());

app.use('/messages', memory({
  paginate: {
    default: 2,
    max: 4,
  },
}));

app.use(express.errorHandler());

app.use('/api/track', new TrackService());

const server = app.listen(3030);

server.on('listening', () => console.log('Feathers application started'));
