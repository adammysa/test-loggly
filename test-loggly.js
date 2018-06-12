var winston  = require('winston');
require('winston-loggly-bulk');

winston.add(winston.transports.Loggly, {
    inputToken: "faedcad1-c302-4de3-bbf1-38de58661fd3",
    subdomain: "logs-01",
    tags: ["Winston-NodeJS"],
    json:true
});

console.log('hello')

winston.log('info',"some info from AW index.js");
winston.log('warn',"a warning from AW index.js");
