const redis = require('redis');
// const client = createClient();


const client = redis.createClient({
  host: 'localhost', // Local Redis server
  port: 6379 // Default Redis port
});

client.on('error', (err) => console.log('Redis client not connected to the server', err));
//function to set a new school && value of the school
function setNewSchool(schoolName, value) {
  client.set(schoolName, value, (error, reply) => {
    if (error) {
      console.error('Error setting the value in Redis:', error);
    } else {
      console.log('Value set successfully in Redis');
      console.log(reply);
    }
  });
}

//function to display the value of the school
function displaySchoolValue(schoolName) {
  client.get(schoolName, (error, reply) => {
    if (error) {
      console.error('Error getting the value in Redis:', error);
    } else {
      console.log(reply);
    }
  });
}
//call the function to set a new school &7 get the value of the school
setNewSchool('HolbertonSanFrancisco', '100');
displaySchoolValue('Holberton');
displaySchoolValue('HolbertonSanFrancisco')

client.on('connect', () => {
  console.log('Redis client connected to the server');

});