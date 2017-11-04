var db = require("../models");

module.exports = function(app) {

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