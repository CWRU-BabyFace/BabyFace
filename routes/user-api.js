var User = require("../models/user.js");

module.exports = function(app) {

  app.get("/api/user/:id", function(req, res) {
    User.findOne({
      where: {
        id: req.params.id
      }
    }).then(function(user) {
      res.json(user);
    });
  });

  app.post("/api/user", function(req, res) {
    User.create(req.body).then(function(data) { //May need this data to determine successful
      res.json(data);
    });
  });

  app.delete("/api/user/:id", function(req, res) {
    User.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(data) { //May need this data to determine success
      res.json(data);
    });
  });
};