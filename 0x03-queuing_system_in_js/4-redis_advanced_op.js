const redis = require('redis');

const client = redis.createClient({
  host: 'localhost', // Local Redis server
  port: 6379 // Default Redis port
});

function setHolbertonSchoolsValues(callback) {
  const values = {
    Portland: 50,
    Seattle: 80,
    'New York': 20,
    Bogota: 20,
    Cali: 40,
    Paris: 2,
  };

  const args = ['HolbertonSchools'];
  Object.entries(values).forEach(([field, value]) => {
    args.push(field, value);
  });
    
  //setting the values using hset
  client.hset(args, redis.print, function (error, res) {
    if (error) {
      console.error('Error: Redis cannot set values');
    } else {
      console.log('Reply: ' + res);
    }
    callback();
  });


  client.hgetall('HolbertonSchools', (error, value) => {
    if (error) {
      console.error('Error retrieving values from Redis:', error);
    } else {
      console.log(value);
    }
    client.quit();
  });
}

client.on('connect', () => {
  console.log('Redis client connected to the server');
  setHolbertonSchoolsValues();
});
