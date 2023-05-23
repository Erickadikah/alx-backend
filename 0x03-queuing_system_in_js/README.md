# Queuing System in JS

## Description

This is a simple queuing system written in JavaScript. It is a simple implementation of a queue data structure. It is a first-in-first-out (FIFO) data structure. The queue is a linear data structure that stores items in a First In First Out (FIFO) manner. With a queue the least recently added item is removed first. A good example of a queue is any queue of consumers for a resource where the consumer that came first is served first. The difference between stacks and queues is in removing. In a stack we remove the item the most recently added; in a queue, we remove the item the least recently added.

## Stack

Back-end: Node.js
JavaScript runtime built on Chrome's V8 JavaScript engine.
ES6
Express.js
Kue

## Installation

```bash
npm install
```
## Resources

[Queue Data Structure](https://en.wikipedia.org/wiki/Queue_(abstract_data_type))

[Reddis Quick start](https://redis.io/topics/quickstart)

[Redis client interface](https://intranet.alxswe.com/rltoken/1rq3ral-3C5O1t67dbGcWg)

[Kue](https://intranet.alxswe.com/rltoken/yTC3Ci2IV2US24xJsBfMgQ)
## Tasks

### [0. Start Redis server]

* Download, extract, and compile Redis v4.0.9
* Run a Redis server instance on port 6379
* In a file named 0-redis_server, write the command used to run the Redis server

### [1. Node Redis Client]

* Install node_redis using npm
* In a file named 1-redis_client.js, copy the code from the tutorial
* Add a new function named setNewSchool that takes in a string argument schoolName and a string argument value and creates a new key schoolName with the value set to value
* Add a new function named displaySchoolValue that takes in a string argument schoolName and prints the value of that key in the following format: The value of schoolName is VALUE

### [2. Node Redis client and basic operations]

### [3. Node Redis client and async operations]

### [4. Node Redis client and advanced operations]

### [5. Node Redis client publisher and subscriber]

### [6. Create the Job creator]

### [7. Create the Job processor]

### [8. Track progress and errors with Kue: Create the Job creator]

### [9. Track progress and errors with Kue: Create the Job processor]

### [10. Writing the job creation function]

### [11. Writing the test for job creation]

### [12. In stock?]

### [13. Can I have a seat?]
