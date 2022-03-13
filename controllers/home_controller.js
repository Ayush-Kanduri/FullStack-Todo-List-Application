const Task = require("../models/task");

module.exports.home = (req, res) => {
	Task.find({}, (err, taskList) => {
		if (err) {
			console.log("Error in fetching the tasks from DB");
			return;
		}
		return res.render("all-tasks", {
			title: "Home Page",
			task_list: taskList,
		});
	});
};

module.exports.incompleteTasks = (req, res) => {
	Task.find({ completed: false }, (err, taskList) => {
		if (err) {
			console.log("Error in fetching the tasks from DB");
			return;
		}
		return res.render("incomplete-tasks", {
			title: "Incomplete Tasks",
			task_list: taskList,
		});
	});
};

module.exports.completedTasks = (req, res) => {
	Task.find({ completed: true }, (err, taskList) => {
		if (err) {
			console.log("Error in fetching the tasks from DB");
			return;
		}
		return res.render("completed-tasks", {
			title: "Completed Tasks",
			task_list: taskList,
		});
	});
};
