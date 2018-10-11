import TraceService from './services/trace';

const feathers = require('@feathersjs/feathers');
const express = require('@feathersjs/express/lib');
const socketio = require('@feathersjs/socketio/lib');
const bodyParser = require('body-parser')
;
const app = express(feathers());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.configure(express.rest());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.configure(socketio());

app.use(express.errorHandler());

app.use('/api/trace', new TraceService());

const traceService = app.service('api/trace');

traceService.on('updated', (location) => {
  console.log('Updated location', location);
}).on('created', (location) => {
  console.log('Created location', location);
}).on('patched', (location) => {
  console.log('patched location', location);
});

traceService.create({ lang: 52.436678, long: 4.816020 });

app.on('connection', connection => app.channel('everybody').join(connection));

app.publish(() => app.channel('everybody'));

const server = app.listen(3030);

server.on('listening', () => console.log('Feathers application started'));
