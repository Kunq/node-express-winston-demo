var winston = require('../utils/logger');
//logging error message
winston.error("Call to undefined method...");

// logging uncaughtException 
throw new Error('Hello, winston!');


