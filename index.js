var winston  = require('winston');
require('winston-loggly-bulk');
 
 winston.add(winston.transports.Loggly, {
    inputToken: "TOKEN",
    subdomain: "SUBDOMAIN",
    tags: ["Winston-NodeJS"],
    json:true
});

winston.log('info',"Attempting to test Loggly & Winston via Node.js. -AW");
