# node-express-winston-demo

The core module is util/logger.js

Require this module in your file to use it:

var logger = require('../util/logger');

logger.warn('warning message');

logger.error('error message');

logger.info('info message');

All logging messages will be displayed at console, as well as being logged into a file file at application root logs/all-logs.log
