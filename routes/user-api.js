var db = require("../models");

module.exports = function(app) {

  //Route for retrieving a single user
  app.get("/api/user/:id", function(req, res) {
    db.User.findOne({
      where: {
        id: req.params.id
      },
      include: [db.Child]
    }).then(function(dbUser) {
      res.json(dbUser);
    });
  });


  //Route for creating a new user
  app.post("/api/user", function(req, res) {
    db.User.create(req.body).then(function(dbUser) { //May need this data to determine successful
      res.json(dbUser);
    });
  });

  //Route for deleting a user... if needed
  app.delete("/api/user/:id", function(req, res) {
    db.User.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbUser) { //May need this data to determine success
      res.json(dbUser);
    });
  });
};