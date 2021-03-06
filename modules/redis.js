'use strict'

//Redis Server
const REDIS_HOST = 'localhost';
const REDIS_PORT = '6379';
var redis = require('redis');
var redis_client = redis.createClient(REDIS_PORT, REDIS_HOST);

//Redis connect checking
redis_client.on("error", function(err) {
  console.log(err);
});
exports.redis = redis;


redis_client.on("error", function (err) {
    console.log("Error " + err);
});

redis_client.set('start', 'starting redis...');
redis_client.get('start', function(err, data){
  console.log(data);
});

module.exports.redis_client = redis_client;


/* did not asyc... 
var hget = function(key, field) {
  redis_client.hget(key, field, function(err, val) {

    if (err) {
      return 'redis_error';
      //error log
    } else {
      return val;
    }
  });
}
module.exports.hget = hget;
*/
