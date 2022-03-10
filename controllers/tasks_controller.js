let data = require("../data");

module.exports.createTask = (req, res) => {
	data.push(req.body);
	console.log(data);
	return res.redirect("back");
};
