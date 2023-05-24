const kue = require('kue');

const blackList = ['4153518780', '4153518781'];

const queue = kue.createQueue({
  currency:2 // processing 2 jobs at a time
  
})
const sendNotification = (phoneNumber, message, job, done) =>{
  job.progress(0, 100);
    if (blackList.includes(phoneNumber)) {
      return done(Error(`Phone number ${phoneNumber} is blacklisted`));
    } else{
      job.progress(50, 100);
      console.log(`Sending notification to ${phoneNumber}, with message: ${message}`);
      done();
    }
  };
    queue.process('push_notification_code_2', 2, (job, done) => {
    sendNotification(job.data.phoneNumber, job.data.message, job, done);
  });
    queue.on('error', (err) => {
    console.log(`Notification job ${job.id} failed: ${err}`);
  });