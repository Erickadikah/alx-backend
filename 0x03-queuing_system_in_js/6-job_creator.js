const kue = require('kue');
const queue = kue.createQueue();


// let completedJobs = 0;//counter for jobs completed 
//cteate a job
const job = queue.createJob('push_notification_code', {
    phoneNumber: '4153518780',
    message: 'This is the code to verify your account'
}).save((error) => {
    if (!error) console.log(`Notification job created: ${job.id}`)
});

//listen for job completion
job.on('complete',() => console.log(`Notification job ${job.id} completed`));
//listen for job failure
job.on('failed',() => console.log(`Notification job ${job.id} failed`));

