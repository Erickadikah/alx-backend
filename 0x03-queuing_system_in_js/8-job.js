const createPushNotificationsJobs = (jobs, queue) => {
  if (!Array.isArray(jobs)) throw Error('Jobs is not an array');
  jobs.forEach((job) => {
    const jobN = queue.create('push_notification_code_3', job);

    jobN.save((error) => {
      if (error) {
        console.log(`Notification job ${jobN.id} failed: ${error.message}`); // Log the error message
      } else {
        console.log(`Notification job created: ${jobN.id}`);
      }
    });

    jobN.on('complete', () => {
      console.log(`Notification job ${jobN.id} completed`);
    }).on('failed', (err) => {
      console.log(`Notification job ${jobN.id} failed: ${err.message}`); // Log the error message
    }).on('progress', (progress) => {
      console.log(`Notification job ${jobN.id} ${progress}% complete`);
    });
  });
};


module.exports = createPushNotificationsJobs;