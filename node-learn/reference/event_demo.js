const EventEmitter = require('events');

//Create Class
class MyEmitter extends EventEmitter {}

// Init Object
const myEmitter = new MyEmitter();

//Event listener
myEmitter.on('event', () => console.log('Event fired!'));

// Init event
myEmitter.emit('event');
myEmitter.emit('event');
myEmitter.emit('event');
myEmitter.emit('event');
