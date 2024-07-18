const express = require('express');
//const morgan = require('morgan');
const path = require('path')
const handlebars = require('express-handlebars');
const methodOverride = require('method-override');
const route = require('./routes');
const db = require('./config/db');

//Connect to DB
db.connect();

const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ "extended": true }));
app.use(express.json());
//HTTP Logger
//app.use(morgan('combined'));

app.use(methodOverride('_method'));

//Tempate engine
app.engine('hbs', handlebars.engine({
    extname: '.hbs',
    helpers: {
        sum: (a, b) => a + b, //Hàm cộng số thứ tự ở hbs
        dateFormat: require('handlebars-dateformat')
    }
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources', 'views'));

//Route Init
route(app);

app.listen(port, () => console.log(`Ứng dụng khởi chạy tại http://localhost:${port}`)); 