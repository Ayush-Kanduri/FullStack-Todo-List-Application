const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
	task: {
		type: String,
		required: true,
	},
	description: {
		type: String,
	},
	priority: {
		type: String,
		required: true,
	},
	category: {
		type: String,
		required: true,
	},
	date: {
		type: String,
		required: true,
	},
	completed: {
		type: Boolean,
		default: false,
	},
});

const Task = mongoose.model("Task", taskSchema);

module.exports = Task;
