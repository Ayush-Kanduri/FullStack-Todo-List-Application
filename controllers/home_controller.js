const data = require("../data");

module.exports.home = (req, res) => {
	return res.render("home", {
		title: "Home Page",
		data,
	});
};
