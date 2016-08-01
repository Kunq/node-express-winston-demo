var logger = require('../utils/logger');

var shallowObject = {
  fullname: "Barry Allen",
  employer: "Central City Police Department",
  country: "United States",
  skills: ['The Fastest Man Alive']
}
 
var complexObject = {
  name: {
    first: "Barry",
    last: "Allen"
  },
  employer: "Central City Police Department",
  country: "United States",
  skills: [
    {
    tag: 'The Fastest Man Alive'
    }
  ]
}


logger.warn(shallowObject);
logger.error(complexObject);

