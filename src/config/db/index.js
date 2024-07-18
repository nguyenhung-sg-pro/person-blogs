const mongoose = require('mongoose');

async function connect() {
    try {
        await mongoose.connect('mongodb://localhost:27017/my_blog');
        console.log('Connect to success!');
    } catch (error) {
        console.log('Connect failed! ' + error);
    }

};
module.exports = { connect };
