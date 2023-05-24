const createPushNotificationsJobs = (jobs, queue) => {
    if (!Array.isArray(jobs)) throw Error('Jobs is not an array');
    jobs.forEach((job) => {
        const jobN = queue.create('push_notification_code_3', job);

        jonN.save((error) => {
        if (!error) console.log(`Notification job created: ${jobN.id}`);
        });
        jobN.on('complete', function(result){
            console.log(`Notification job ${jobN.id} completed`);
        }).on('failed', function(err){
            console.log(`Notification job ${jobN.id} failed: ${err}`);
        }).on('progress', function(progress, data){
            console.log(`Notification job ${jobN.id} ${progress}% complete`);
        });
    });
};

module.exports = createPushNotificationsJobs;