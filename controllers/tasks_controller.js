const Task = require("../models/task");

module.exports.createTask = (req, res) => {
	let date = new Date(req.body.date).getDate();
	if (date < 10) {
		date = "0" + date;
	}
	const month = new Date(req.body.date).toLocaleString("default", {
		month: "short",
	});
	const year = new Date(req.body.date).getFullYear().toString().slice(-2);
	Task.create(
		{
			task: req.body.task,
			description: req.body.description,
			priority: req.body.priority,
			category: req.body.category,
			date: `${month} ${date}, ${year}`,
		},
		(err, newTask) => {
			if (err) {
				console.log("Error in Creating a Task");
				return;
			}
			console.log(
				`********************\n${newTask}\n********************\n`
			);
			console.log("Task Created");
			return res.redirect("back");
		}
	);
};

module.exports.deleteTask = (req, res) => {
	let id = req.query.id;
	setTimeout(() => {
		Task.findByIdAndDelete(id, (err) => {
			if (err) {
				console.log("Error in Deleting a Task");
				return;
			}
			console.log("Task Deleted");
			return res.redirect("back");
		});
	}, 1000);
};

module.exports.completeTask = (req, res) => {
	let id = req.query.id;
	let completed = req.query.completed;

	if (completed == "true") {
		completed = false;
	} else {
		completed = true;
	}

	Task.findByIdAndUpdate(id, { completed: completed }, (err) => {
		if (err) {
			console.log("Error in Updating the Task");
			return;
		}
		console.log("Task Updated");
		return res.redirect("back");
	});
};