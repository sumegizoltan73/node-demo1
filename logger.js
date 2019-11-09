const EventEmitter = require('events');

var url = 'http://mylogger.io/log';

class Logger extends EventEmitter {
  log(message) {
    console.log(message);

    // Raise an event
    this.emit('messageLogged', { data: message });
  }
}

module.exports = Logger;
