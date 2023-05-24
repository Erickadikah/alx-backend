// const kue = require('kue');
// import { createQueue } from 'kue';
const kue = require('kue');

const jobs = [
    {
    phoneNumber: '4153518780',
    message: 'This is the code 1234 to verify your account'
  },
  {
    phoneNumber: '4153518781',
    message: 'This is the code 4562 to verify your account'
  },
  {
    phoneNumber: '4153518743',
    message: 'This is the code 4321 to verify your account'
  },
  {
    phoneNumber: '4153538781',
    message: 'This is the code 4562 to verify your account'
  },
  {
    phoneNumber: '4153118782',
    message: 'This is the code 4321 to verify your account'
  },
  {
    phoneNumber: '4153718781',
    message: 'This is the code 4562 to verify your account'
  },
  {
    phoneNumber: '4159518782',
    message: 'This is the code 4321 to verify your account'
  },
  {
    phoneNumber: '4158718781',
    message: 'This is the code 4562 to verify your account'
  },
  {
    phoneNumber: '4153818782',
    message: 'This is the code 4321 to verify your account'
  },
  {
    phoneNumber: '4154318781',
    message: 'This is the code 4562 to verify your account'
  },
  {
    phoneNumber: '4151218782',
    message: 'This is the code 4321 to verify your account'
  }
];

const queue = kue.createQueue();

jobs.forEach((job) => {
  const jobN = queue.create('push_notification_code2', job).save((error) => {
    if (!error) {
      console.log(`Notification job created: ${jobN.id}`);
    }
  });
// functions to listen for job completion and failure, and to log the progress
  jobN.on('complete', function(result){
    console.log(`Notification job ${jobN.id} completed`);
  }).on('failed', function(error){
    console.log(`Notification job ${jobN.id} failed:${error}}`);
  }).on('progress', function(progress, data) {
    console.log(`Notification job ${jobN.id} ${progress}% complete`);
  });
});