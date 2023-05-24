// Description: Stock management system
// database: Redis
//server: ExpressJs
const redis = require('redis');
const express = require('express');
const { promisify } = require('util');

const app = express();
const port = 1245;

const client = redis.createClient({
  host: 'localhost', // Local Redis server
  port: 6379, // Default Redis port
});

client.on('error', (err) => console.log('Redis client not connected to the server', err));

const listProducts = [
  {
    id: 1,
    itemName: 'Suitcase 250',
    price: 50,
    initialAvailableQuantity: 4,
  },
  {
    id: 2,
    itemName: 'Suitcase 450',
    price: 100,
    initialAvailableQuantity: 10,
  },
  {
    id: 3,
    itemName: 'Suitcase 650',
    price: 350,
    initialAvailableQuantity: 2,
  },
  {
    id: 4,
    itemName: 'Suitcase 1050',
    price: 550,
    initialAvailableQuantity: 5,
  },
];

const getItemById = (id) => {
  // compare the id with the id of each item in the list
  const itemId = parseInt(id);
  for (const item of listProducts) {
    if (item.id === itemId) {
      return item;
    }
  }
  return null;
};

// Promisify Redis commands
// Getting the initial available quantity from Redis
const getAsync = promisify(client.get).bind(client);
client.get('listProducts', (err, reply) => {
    if (err) {
        console.log('Error retrieving listProducts from redis:', err);
    } else {
        console.log('listProducts has been retrieved from redis');
    }
});


//storing the initial available quantity in Redis
const setAsync = promisify(client.set).bind(client);
setAsync('listProducts', JSON.stringify(listProducts))
    .then(() => {
        console.log('listProducts stored in Redis')
    })
    .catch((error) => {
        console.log('Error storint lisProduct in Redis', error)
    });

const reserveStockById = async (itemId, initialAvailableQuantity, res) => {
  const item = getItemById(itemId);
  if (item) {
    if (item.initialAvailableQuantity > 0) {
      item.initialAvailableQuantity--;

      // Update the available quantity in Redis
      await setAsync(`product:${itemId}`, item.initialAvailableQuantity);

      return res.json({ status: `Reservation confirmed, itemId: ${itemId}` });
    } else {
      return res.json({ status: `No available quantity for itemId: ${itemId}` });
    }
  } else {
    return res.status(404).json({ error: 'Item not found' });
  }
};

// app.get('/', (req, res) => {});

// Getting all items in the list in JSON format
app.get('/list_products', (req, res) => {
  res.json(listProducts);
});

// Getting item by id
app.get('/list_products/:itemId', (req, res) => {
  const itemId = req.params.itemId;
  const item = getItemById(itemId);
  if (item) {
    res.status(200).json(item);
  } else {
    res.status(404).json({ status: 'Product not found' });
  }
});

// Reserve an item by id
app.get('/reserve_product/:itemId', (req, res) => {
  const itemId = req.params.itemId;
  const initialAvailableQuantity = 0; // Set the initial available quantity to 0 because we don't need to track it

  reserveStockById(itemId, initialAvailableQuantity, res);
});

client.on('connect', () => {
  console.log('Redis client connected to the server');
});

app.listen(port, () => {
  console.log(`app listening at http://localhost:${port}`);
});
