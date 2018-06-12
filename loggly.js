'use strict'
//usage:
//send an 'info' log to loggly';
//winston.log('info',"some log info for loggly");

//export function logglywinston(){
//  return {
module.exports = {
  logglywinston: function() {
    //return{
    var winston  = require('winston');
    require('winston-loggly-bulk');

    winston.add(winston.transports.Loggly, {
        inputToken: "faedcad1-c302-4de3-bbf1-38de58661fd3",
        subdomain: "logs-01",
        tags: ["Winston-NodeJS"],
        json:true
    });
  //}
  }
}
