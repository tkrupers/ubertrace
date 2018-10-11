import TraceService from './services/trace';
import Tracker from './mock/tracker';

const feathers = require('@feathersjs/feathers');
const express = require('@feathersjs/express');
const socketio = require('@feathersjs/socketio');

const app = express(feathers());
const tracker = new Tracker();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.configure(express.rest());
app.configure(socketio());

app.use(express.errorHandler());

app.use('/api/trace', new TraceService());

const traceService = app.service('api/trace');

traceService
  .on('updated', (location) => {
    console.log('Updated location', location);
  })
  .on('created', (location) => {
    console.log('Created location', location);
  });


traceService.create({ lang: 52.436678, long: 4.816020 });

app.on('connection', connection => app.channel('everybody').join(connection));

app.publish(() => app.channel('everybody'));

const server = app.listen(3030);

tracker.startTracker(location => traceService.update(1, location));

server.on('listening', () => console.log('Feathers application started'));
