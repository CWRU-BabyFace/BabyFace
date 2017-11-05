	
module.exports = function(app) {
	app.get("/", function(req, res) {
	  // send us to the next get function instead.
	  res.redirect("/home");
	});

	app.get("/home", function(req, res){
		return res.render("index");
	})
};	