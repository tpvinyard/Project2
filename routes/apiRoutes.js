var db = require("../models");
const Datastore = require('nedb');
const fetch = require('node-fetch');
const passport = require('passport');
const parseString = require('xml2js').parseString;
// var XMLSerializer = require('xmlserializer');
// // const $ = require('jquery');
// var DOMParser = require('xmldom');

const myVars = {
  domain: 'stargazersproject.auth0.com',
  clientID: '4u6Y6XtPah8d7MYPcmEK1MHQ8sCNTNiI',
  clientSecret: '7XWhngqngeJIpT7SxzfVlZUkR7CwsUCR8J6Td1D4Smdng6PeSzL_7QdCpjJiowHb',
  callbackURL: 'https://agile-fjord-46413.herokuapp.com/callback'
}

module.exports = function(app) {
  // auth0
  app.get('/layouts', function(req, res, next) {
    res.render('main');
  });

  // auth0 login function
  app.get('/login', passport.authenticate('auth0', {
    clientID: myVars.clientID,
    domain: myVars.domain,
    redirectUri: myVars.callbackURL,
    responseType: 'code',
    audience: 'https://stargazersproject.auth0.com/api/v2/',
    scope: 'openid profile'}),
    function(req, res) {
      res.redirect('/');
    }
  );

  app.get('/logout', function(req, res) {
    req.logout();
    res.redirect('/');
  });

  app.get('/callback',
    passport.authenticate('auth0', {
      failureRedirect: '/failure'
    }),
    function(req, res) {
        res.redirect('/user');
    }
  );

  app.get('/user', function(req, res, next) {
    res.render('user', {
      user: req.user
    })
  });

  app.get('/failure', function(req, res, next) {
    res.render('404');
  });

  app.get("/api/meteorshowers", function(req, res) {
    db.meteorshowers.findAll({}).then(function(Result) {
      res.json(Result);
    });
  });

  // Get all examples
  app.get("/api/examples", function(req, res) {
    db.Example.findAll({}).then(function(dbExamples) {
      res.json(dbExamples);
    });
  });

  // Create a new example
  app.post("/api/examples", function(req, res) {
    db.Example.create(req.body).then(function(dbExample) {
      res.json(dbExample);
    });
  });

  // enDB creator
  const database = new Datastore('coords.db');
  database.loadDatabase();

  // geolocation data
  app.post('/api', (request, response) => {
    // console.log('succesful request');
    // console.log(request.body);
    const data = request.body;
    const timestamp = Date.now();
    data.timestamp = timestamp;
    database.insert(data);
    response.json(data);
  });

  app.get('/weather/:latlon', async (request, response) => {
    // console.log(request.params);
    const latlon = request.params.latlon.split(',');
    // console.log(latlon);
    const lat = latlon[0];
    const lon = latlon[1];
    // console.log(lat, lon);
    // const api_key = process.env.API_KEY;
    const weather_url = `https://api.darksky.net/forecast/ef516e4b2e594d932c47badeee23c8bb/${lat},${lon}/?units=us`;
    const weather_response = await fetch(weather_url);
    const weather_data = await weather_response.json();
    const forecast_response = await fetch(weather_url);
    const forecast_data = await forecast_response.json();
    const data = {
      weather: weather_data,
      forecast: forecast_data
    };
    response.json(data);
  });
  

  // Delete an example by id
  app.delete("/api/examples/:id", function(req, res) {
    db.Example.destroy({ where: { id: req.params.id } }).then(function(dbExample) {
      res.json(dbExample);
    });
  });

  app.get('/campgrounds/:latlon', async (request, response) => {
    console.log(request.params);
    const latlon = request.params.latlon.split(',');
    console.log(latlon);
    const lat = latlon[0];
    const lon = latlon[1];
    console.log(lat, lon);
    // const api_key = process.env.API_KEY;
    const campground_url = `http://api.amp.active.com/camping/campgrounds?landmarkName=true&landmarkLat=${lat}&landmarkLong=${lon}&xml=true&api_key=5fqwnemydqsaxfcwd3qgrhrg`;
    // const campground_url = `http://api.amp.active.com/camping/campgrounds?landmarkName=true&landmarkLat=37.84035&landmarkLong=-122.4888889&xml=true&api_key=5fqwnemydqsaxfcwd3qgrhrg`;
    console.log(campground_url);
    await fetch(campground_url)
      .then(response => response.text())
      .then(data => parseString(data,function(err, res) {response.json(res.resultset.result)}))
    // console.log($(campground_response).serialize());
  })

  //TODO : RENAME ALL
  app.get('api/spaceImages', async (response) => {
    const space_url = 'http://hubblesite.org/api/v3/images';
    const space_response = await fetch(space_url);
    const space_data = await space_response.json();
    console.log("<><><><><><>?<><><>");
    var imageUrls = [];
    const image_url = 'http://hubblesite.org/api/v3/image/'
    var counter = 0;
    for (i in space_data) {
      const new_image_response = await fetch(image_url + space_data[i].id);
      const new_image_data = await new_image_response.json();
      imageUrls[i] = new_image_data.image_files[0].file_url.substr(2); 
      counter++;
      if (counter == 5){
        break;
      }    
    }

    res.json(imageUrls);


    console.log("<><><><><><>?<><><>");
  });

};
