var db = require("../models");

module.exports = function(app) {

  //Get route for retrieving a single memory
  // app.get("/api/memory/:id", function(req, res) {
  //   db.Memory.findOne({
  //     where: {
  //       id: req.params.id
  //     },
  //     include: [db.Child]
  //   }).then(function(dbMemory) {
  //     res.json(dbMemory);
  //   });
  // });

  //Get route for retrieving all memories for a child
  app.get("/api/memory/:id", function(req, res) {
    var query = {};
    if (req.params.id) {
      console.log(req.params);
      query.ChildId = req.params.id;
    }
    db.Memory.findAll({
      where: query,
      include: [db.Child]
    }).then(function(dbMemory) {
      console.log(dbMemory);
      var memoryObject = {
        childMemory: dbMemory
      }
      res.render("timeline", memoryObject)
    });
  });

  //POST route for saving a new post
  app.post("/api/memory", function(req, res) {
    console.log(req.body);
    db.Memory.create({
        title: req.body.title,
        date: req.body.date,
        caption: req.body.caption,
        ChildId: req.body.childId,
        image: req.body.image ? req.body.image : "no-image"
    }).then(function(dbMemory) {
      var memoryObject = {
        childMemory: dbMemory
      }
      console.log(dbMemory);
      res.render("timeline", memoryObject);
    });
  });


  // DELETE route for deleting posts.. if needed
  app.delete("/api/memory/:id", function(req, res) {
    db.Memory.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbMemory) {
      res.json(dbMemory);
    });
  });
};