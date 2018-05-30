var winston  = require('winston');
require('winston-loggly-bulk');
 
winston.add(winston.transports.Loggly, {
    inputToken: "faedcad1-c302-4de3-bbf1-38de58661fd3",
    subdomain: "logs-01",
    tags: ["Winston-NodeJS"],
    json:true
});

winston.log('info',"Attempting to test Loggly & Winston via Node.js. -AW");
