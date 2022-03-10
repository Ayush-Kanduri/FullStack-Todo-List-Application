const Task = require("../models/task");

module.exports.home = (req, res) => {
	Task.find({}, (err, taskList) => {
		if (err) {
			console.log("Error in fetching the tasks from DB");
			return;
		}
		return res.render("tasks", {
			title: "Home Page",
			task_list: taskList,
		});
	});
};
