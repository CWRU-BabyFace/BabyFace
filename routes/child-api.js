var Child = require("../models/child.js");

module.exports = function(app) {

  app.get("/api/child/:id", function(req, res) {
    Child.findAll({
      where: {
        foreignKey: req.params.id
      }
    }).then(function(children) {
      res.json(children);
    });
  });

  app.post("/api/child", function(req, res) {
    Child.create(req.body).then(function(data) { //May need this data to determine successful
      res.json(data);
    });
  });

  app.delete("/api/child/:id", function(req, res) {
    Child.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(data) { //May need this data to determine success
      res.json(data);
    });
  });
};