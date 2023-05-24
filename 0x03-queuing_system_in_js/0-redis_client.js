const redis = require('redis');

const client = redis.createClient({
  host: 'localhost', // Local Redis server
  port: 6379 // Default Redis port
});

client.on('error', (err) => console.log('Redis client not connected to the server', err));

client.on('connect', () => {
  console.log('Redis client connected to the server');
});
