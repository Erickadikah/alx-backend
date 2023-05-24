const { get } = require('http');
const redis = require('redis');
// const client = createClient();
const { promisify } = require('util');



const client = redis.createClient({
  host: 'localhost', // Local Redis server
  port: 6379 // Default Redis port
});

client.on('error', (err) => console.log('Redis client not connected to the server', err));
//function to set a new school && value of the school
const setAsync = promisify(client.set).bind(client);
async function setNewSchool(schoolName, value) {
  try {
    await setAsync(schoolName, value);
    // console.log('Value set successfully in Redis');

  } catch (error) {
    console.error('Error setting the value in Redis:', error);
  }
}

//function to display the value of the school
// function displaySchoolValue(schoolName)
const getAsync = promisify(client.get).bind(client);
async function displaySchoolValue (schoolName) {
   try {
    const value = await getAsync(schoolName);
    console.log(value);
   } catch (error) {
        console.error('Error getting the value in Redis:', error);
   }
}
//call the function to set a new school &7 get the value of the school

setNewSchool('HolbertonSanFrancisco', '100');
displaySchoolValue('Holberton');
displaySchoolValue('HolbertonSanFrancisco')


client.on('connect', () => {
  console.log('Redis client connected to the server');

});