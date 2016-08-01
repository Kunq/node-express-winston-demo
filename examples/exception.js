var logger = require('../utils/logger');
//logging error message
logger.error("Call to undefined method...");

// logging uncaughtException 
throw new Error('Hello, winston!');


