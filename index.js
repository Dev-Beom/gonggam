var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var flash = require('connect-flash');
var session = require('express-session');
var passport = require('./config/passport');
var util = require('./util');
var app = express();
const cors = require('cors');
require('dotenv').config();

const logger = require('./logger');

// DB setting
mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);
mongoose.connect(process.env.MONGO_DB);
var db = mongoose.connection;
console.log('## DB connecting.');
db.once('open', function() {
    console.log('## DB connected.');
    console.log('## Path:', process.env.MONGO_DB);
});
db.on('error', function(err) {
    console.log('## DB ERROR : ', err);
});

// Other settings
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride('_method'));
app.use(flash());
app.use(session({ secret: 'MySecret', resave: true, saveUninitialized: true }));
app.use(cors());

// Passport
app.use(passport.initialize());
app.use(passport.session());

// Logger
app.use(logger());

// Custom Middlewares
app.use(function(req, res, next) {
    res.locals.isAuthenticated = req.isAuthenticated();
    res.locals.currentUser = req.user;
    res.locals.util = util;
    next();
});

// Routes
app.use('/', require('./routes/home'));
app.use('/posts', util.getPostQueryString, require('./routes/posts'));
app.use('/users', require('./routes/users'));
app.use('/comments', util.getPostQueryString, require('./routes/comments'));
app.use('/files', require('./routes/files'));


// Port setting
var port = (process.env.PORT || 3000);
app.listen(port, function() {
    console.log('## Server ON');
    console.log('## URL: http://localhost:' + port);
});