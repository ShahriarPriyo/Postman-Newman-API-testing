const newman = require('newman');
// require('dotenv').config();

newman.run({
    //collection: require('./collection/dmoney.json'),
    collection: `https://api.postman.com/collections/31247794-41861f70-dd0e-4274-92b4-aab83fe8913f?access_key=${process.env.accessKey}`,
    //environment:require('./collection/env.json'),
    reporters: 'htmlextra',
    iterationCount: 1,
    reporter: {
        htmlextra: {
            export: './Reports/report.html', // If not specified, the file will be written to `newman/` in the current working directory.
        }
    }
}, function (err) {
    if (err) { throw err; }
    console.log('collection run complete!');
});