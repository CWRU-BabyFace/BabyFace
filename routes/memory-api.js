var Memory = require("../models/memory.js");

module.exports = function(app) {

  app.get("/api/memory/:id", function(req, res) {
    Memory.findAll({
      where: {
        foreignKey: req.params.id
      }
    }).then(function(memories) {
      res.json(memories);
    });
  });

  app.post("/api/memory", function(req, res) {
    Memory.create(req.body).then(function(data) { //May need this data to determine successful
      res.json(data);
    });
  });

  app.delete("/api/memory/:id", function(req, res) {
    Memory.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(data) { //May need this data to determine success
      res.json(data);
    });
  });
};