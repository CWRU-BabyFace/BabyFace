var db = require("../models");

module.exports = function(app) {

  //Get route for retrieving a single memory
  app.get("/api/memory/:id", function(req, res) {
    db.Memory.findOne({
      where: {
        id: req.params.id
      },
      include: [db.Child]
    }).then(function(dbMemory) {
      res.json(dbMemory);
    });
  });

  //Get route for retrieving all memories for a child
  app.get("/api/memory", function(req, res) {
    var query = {};
    if (req.query.child_id) {
      query.ChildId = req.query.child_id;
    }
    db.Memory.findAll({
      where: query,
      include: [db.Child]
    }).then(function(dbMemory) {
      res.json(dbMemory);
    });
  });

  //POST route for saving a new post
  app.post("/api/memory", function(req, res) {
    db.Memory.create(req.body).then(function(dbMemory) { //May need this data to determine successful
      res.json(dbMemory);
    });
  });


  // DELETE route for deleting posts.. if needed
  app.delete("/api/memory/:id", function(req, res) {
    db.Memory.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbMemory) { //May need this data to determine success
      res.json(dbMemory);
    });
  });
};