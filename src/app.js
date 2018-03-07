const app = require('express')();
const contoller = require('./controller');
const exphbs= require('express-handlebars');
const path = require('path')
const morgan = require('morgan');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const mongoose =require('mongoose');
const configDB = require('../config/database')

mongoose.connect(configDB.url)


app.engine('hbs' , exphbs({defaultLayoutb : 'main'}));
app.set('views', path.join(__dirname ,'views'));
app.set('view engine', 'hbs')
app.use(morgan('dev'))
app.use(cookieParser());
app.use(session(
    { secret: 'anything' ,
      saveUninitialized : false ,
      resave : true
    }))



app.use(contoller);
module.exports = app ;
