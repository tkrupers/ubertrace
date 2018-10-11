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

app.service('messages').create({
  text: 'Message created on server',
}).then(message => console.log('Created message', message));

const port = 3030;

app.listen(port, () => {
  console.log(`Feathers server listening on port ${port}`);
});
