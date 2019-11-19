var db = require("../models");
var meteors = require("../public/js/meteor-data.js")
const moment = require('moment');
const { Op } = require('sequelize');


console.log(meteors);

module.exports = function(app) {
  // Load index page
  app.get("/", async function(req, res) {
    await db.meteorshowers.destroy({ where: {}, truncate: true
    });
    await db.meteorshowers.bulkCreate(meteors);
    let thirtyDaysFromNow = moment().add(30, 'days').format('YYYY-MM-DD')
    console.log(thirtyDaysFromNow);
    await db.meteorshowers.findAll({ where: {
      begin_date: {
        [Op.lte]: thirtyDaysFromNow,
        [Op.gte]: moment().format('YYYY-MM-DD')
      }
    }}).then(function(result) {
      res.render('index', {
        index: result
      })
    })
  });

  app.get('/results/:id', function(req, res) {
    db.meteorshowers.findOne({ where: { id: req.params.id } }).then(function(meteorResult) {


      // spaceImages.findOne({where: {imageUrls: [1]}}).then(function(imgResult) {
      //   console.log(imgResult);
      //   meteorResult.imageUrls = imgResult;
      // });


      res.render("results", {
        resultMeteor: meteorResult
      });
    });
  })

  app.get("/calendar", function(req, res) {
    db.meteorshowers.findAll({}).then(function(result) {
      res.render('calendar', {
        index: result
      });
    })

  });

  app.get("/calendar", function(req, res) {
    db.meteorshowers.findAll({}).then(function(result) {
      res.render('calendar', {
        index: result
      });
    })

  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });

  app.get("/calendar", function(req, res) {
    spaceImages.findOne({where: {imageUrls: [i]}}).then(function(imgResult) {
    res.render("calendar", {
      imageUrls: imgResult
    });
  });
});
  
};
