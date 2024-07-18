//const newRouter = require('./news');
const siteRouter = require('./site');
const contactRouter = require('./contact');
const aboutRouter = require('./about');
const blogRouter = require('./blogs');
const meRouter = require('./me');

function route(app) {
    app.use('/me', meRouter);
    // app.use('/news', newRouter);
    app.use('/blogs', blogRouter);
    app.use('/contact', contactRouter);
    app.use('/about', aboutRouter);
    app.use('/', siteRouter);
}

module.exports = route;