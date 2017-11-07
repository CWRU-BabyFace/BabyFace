var db = require("../models");

module.exports = function(app) {

  //Route for retrieving a single user
  app.get("/api/verify", function(req, res) {
    console.log(req.body.username);
    console.log(req.body.password);
    db.User.findOne({
      where: {
        //id: req.body.username,
        name: req.body.username,
        password: req.body.password
      }//,
      //include: [db.Child]
    }).then(function(dbUser) {
      console.log(dbUser);
      if (dbUser !== null) {
      res.json(dbUser);
      res.render("userhome");
      }
      else{
        var hbsObject = {
          notFound: "User Not Found!"
        }
        console.log("user not found");
        res.redirect("/");
      }
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