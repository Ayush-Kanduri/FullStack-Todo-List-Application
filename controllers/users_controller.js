module.exports.profile = (req, res) => {
	return res.render("users_profile", {
		title: "User Profile Page",
	});
};
