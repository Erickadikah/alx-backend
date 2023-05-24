const redis = require('redis');

const client = redis.createClient({
    host: 'localhost', // Local Redis server
    port: 6379 // Default Redis port
});

client.on('connect', (error) => {
    if (error) {
        console.log('Redis client not connected to the server:', error);

    } else {
        console.log('Redis client connected to the server');
    }
    client.subscribe('holberton school channel');
});

client.on('message', (channel, message) => {
   console.log(message);
   if (message === 'KILL_SERVER') {
       client.unsubscribe(channel);
       client.quit();
   }
});