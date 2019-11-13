var db = require("../models");
var meteors = require("../public/js/meteor-data.js")
const moment = require('moment');

console.log(meteors);

module.exports = function(app) {
  // Load index page
  app.get("/", async function(req, res) {
    await db.meteorshowers.destroy({ where: {}, truncate: true
    });
    await db.meteorshowers.bulkCreate(meteors);
    let thirtyDaysAgo = moment().subtract(360, 'days').format('YYYY-MM-DD')
    console.log(thirtyDaysAgo);
    await db.meteorshowers.findAll({ where: {
      end_date: {
        $gte: thirtyDaysAgo
      }
    }}).then(function(result) {
      res.render('index', {
        index: result
      })
    })
  });

  app.get('/event', function(req, res) {

      res.render("results", {

      })
  })

  // Load example page and pass in an example by id
  app.get("/example/:id", function(req, res) {
    db.Example.findOne({ where: { id: req.params.id } }).then(function(dbExample) {
      res.render("example", {
        example: dbExample
      });
    });
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
