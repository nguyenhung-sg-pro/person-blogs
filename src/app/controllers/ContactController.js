// const Course = require('./models/Course');
const { mutileMongooseToObject } = require('../../util/mongoose');
class ContactController {

    index(req, res, next) {
        res.render('contact');
    }
}

module.exports = new ContactController;