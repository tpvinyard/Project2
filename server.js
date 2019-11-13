require("dotenv").config();
var express = require("express");
var bodyParser = require("body-parser");
var exphbs = require("express-handlebars");

const path = require('path');
const session = require('express-session');
const passport = require('passport');
const Auth0Strategy = require('passport-auth0');

const strategy = new Auth0Strategy(
  {
    domain: 'stargazersproject.auth0.com',
    clientID: '4u6Y6XtPah8d7MYPcmEK1MHQ8sCNTNiI',
    clientSecret: '7XWhngqngeJIpT7SxzfVlZUkR7CwsUCR8J6Td1D4Smdng6PeSzL_7QdCpjJiowHb',
    callbackURL: 'http://localhost:3000/callback'
  },
  function(accessToken, refreshToken, extraParam, profile, done) {
    return done(null, profile);
  }
)


passport.use(strategy);

passport.serializeUser(function(user, done) {
   done(null, user);
});
passport.deserializeUser(function (user, done) {
  done(null, user);
});


var db = require("./models");
const app = express();
var PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(
    session({
      secret: '7XWhngqngeJIpT7SxzfVlZUkR7CwsUCR8J6Td1D4Smdng6PeSzL_7QdCpjJiowHb',
      resave: true,
      saveUninitialized: true
    })
);

app.use(passport.initialize());
app.use(passport.session());

app.use(function (req, res, next) {
  res.locals.loggedIn = false;

  if (req.session.passport && typeof req.session.passport.user != 'undefined') {
      res.locals.loggedIn = true;
  }

  next();
});


app.use(express.static("public"));
app.use(express.json({ limit: '1mb' }));

// Handlebars
app.engine(
  "handlebars",
  exphbs({
    defaultLayout: "main"
  })
);
app.set('views', path.join(__dirname, 'views'));
app.set("view engine", "handlebars");

// Routes
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);



var syncOptions = { force: false };

// If running a test, set syncOptions.force to true
// clearing the `testdb`
if (process.env.NODE_ENV === "test") {
  syncOptions.force = true;
}

// Starting the server, syncing our models ------------------------------------/
db.sequelize.sync(syncOptions).then(function() {
  app.listen(PORT, function() {
    console.log(
      "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
      PORT,
      PORT
    );
  });
});

module.exports = app;
