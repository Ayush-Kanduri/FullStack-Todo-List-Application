//Require the Task Model Data Structure
const Task = require("../models/task");

//Export the Home Controller's home() Function
module.exports.home = (req, res) => {
	let count = 0;
	Task.find({}, (err, taskList) => {
		if (err) {
			console.log("Error in fetching the tasks from DB");
			return;
		}
		taskList.forEach((task) => {
			if (!task.completed) {
				count++;
			}
		});
		return res.render("all-tasks", {
			title: "Home Page",
			task_list: taskList,
			count: count,
		});
	});
};

//Export the Home Controller's incompleteTasks() Function
module.exports.incompleteTasks = (req, res) => {
	Task.find({ completed: false }, (err, taskList) => {
		if (err) {
			console.log("Error in fetching the tasks from DB");
			return;
		}
		return res.render("incomplete-tasks", {
			title: "Incomplete Tasks",
			task_list: taskList,
			count: taskList.length,
		});
	});
};

//Export the Home Controller's completedTasks() Function
module.exports.completedTasks = (req, res) => {
	let count = 0;
	const arr = [];
	Task.find({}, (err, taskList) => {
		if (err) {
			console.log("Error in fetching the tasks from DB");
			return;
		}
		taskList.forEach((task) => {
			if (!task.completed) {
				count++;
			} else {
				arr.push(task);
			}
		});
		return res.render("completed-tasks", {
			title: "Completed Tasks",
			task_list: arr,
			count: count,
		});
	});
};
