module.exports.profile = (req, res) => {
	return res.render("profile", {
		title: "User Profile Page",
	});
};
