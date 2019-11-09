var db = require("../models");
const Datastore = require('nedb');
const fetch = require('node-fetch');


module.exports = function(app) {

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
    console.log('succesful request');
    // console.log(request.body);
    const data = request.body;
    const timestamp = Date.now();
    data.timestamp = timestamp;
    database.insert(data);
    response.json({
      status: 'success',
      timestamp: timestamp,
      latitude: data.lat,
      longitude: data.lon
    });
  });

  app.get('/weather/:latlon', async (request, response) => {
    console.log(request.params);
    const latlon = request.params.latlon.split(',');
    console.log(latlon);
    const lat = latlon[0];
    const lon = latlon[1];
    console.log(lat, lon);
    // const api_key = process.env.API_KEY;
    const weather_url = `https://api.darksky.net/forecast/ef516e4b2e594d932c47badeee23c8bb/${lat},${lon}/?units=us`;
    const weather_response = await fetch(weather_url);
    const weather_data = await weather_response.json();
    const data = {
      weather: weather_data,
    };
    response.json(data);
  });
  

  // Delete an example by id
  app.delete("/api/examples/:id", function(req, res) {
    db.Example.destroy({ where: { id: req.params.id } }).then(function(dbExample) {
      res.json(dbExample);
    });
  });
};
