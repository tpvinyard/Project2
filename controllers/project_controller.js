// TODO: search and replace on burgers to change to Project #2 application
//      Rename file

console.log("inside burgers_Controller.js");
var express = require("express");
​
var router = express.Router();
​
// Import the model (burger.js) to use its database functions.
var burger = require("../models/burgers.js");
​
// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
  burger.select(function(data) {
    var hbsObject = {
    burgers: data
    };
    //console.log(hbsObject);
    console.log("inside burgers_Controller.js /  hbsObject: " + hbsObject);
    res.render("index", hbsObject);
  });
});
​
router.post("/api/burgers", function(req, res) {
  console.log("inside burgers_Controller.js .post/api/burgers");
  burger.create(["name", "devoured", cb], [req.body.name, req.body.devoured], function(result) {
    // Send back the ID of the new burger order
    res.json({ id: result.insertId });
  });
});
​
router.put("/api/burger/:id", function(req, res) {
  var condition = "id = " + req.params.id;
  console.log("devoured", condition);
  console.log("inside burgers_Controller.js .put /api/burgers/:id");
  burger.update(
    {
      devoured: req.body.condition
    },
    condition,
    function(result) {
      if (result.changedRows === 0) {
        // If no rows were changed, then the ID must not exist, so 404
        return res.status(404).end();
      }
      res.status(200).end();
​
    }
  );
});
​
// Export routes for server.js to use.
module.exports = router;