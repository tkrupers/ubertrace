import TraceService from './services/trace';

const feathers = require('@feathersjs/feathers');
const express = require('@feathersjs/express/lib');
const socketio = require('@feathersjs/socketio/lib');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express(feathers());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.configure(express.rest());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.configure(socketio(3031));

app.use(express.errorHandler());

app.use('/api/trace', new TraceService());

const traceService = app.service('api/trace');

traceService
  .on('updated', (location) => {
    console.log('Updated location', location);
  })
  .on('created', (location) => {
    console.log('Created location', location);
  })
  .on('patched', (location) => {
    console.log('patched location', location);
  });

app.on('connection', (connection) => {
  // connection.emit('tracker', { test: 'jo' });
  app.channel('everybody').join(connection);
});

app.publish(() => app.channel('everybody'));

const server = app.listen(3030);

server.on('listening', () => console.log('Feathers application started'));
