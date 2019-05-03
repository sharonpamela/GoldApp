const express = require('express');
const passport = require('passport');
const cookieSession = require('cookie-session');
const bodyParser = require('body-parser');
const keys = require('./config/keys');
const path = require("path");
const  cors = require("cors");
const mongoose = require('mongoose');
require('./models/User');
require('./services/passport');
const usersController = require("./controllers/usersController");

mongoose.Promise = global.Promise;
// mongoose.connect(keys.mongoURI, { useNewUrlParser: true } );
mongoose.connect("mongodb://localhost/gold" , { useNewUrlParser: true } );

const app = express();

app.use(cors()); // this allows cross-origin requests which are prohibited by default

app.use(bodyParser.json());
app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey]
  })
);

app.use(passport.initialize());
app.use(passport.session());

require('./services/authRoutes')(app);
// require('./routes')(app);
const routes = require('./routes');
app.use(routes);

if (process.env.NODE_ENV === 'production') {
  // Express will serve up production assets
  // like our main.js file, or main.css file!
  app.use(express.static('client/build'));

  // Express will serve up the index.html file
  // if it doesn't recognize the route
  const path = require('path');
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
} else {
    app.use(express.static(path.join(__dirname, '../client/public/index.html')));
}

// Start the API server
const PORT = process.env.PORT || 3001;
app.listen(PORT, function () {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
