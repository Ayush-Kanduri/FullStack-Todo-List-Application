//Create the same instance of mongoose which is used in the MongoDB configuration inside config
const mongoose = require("mongoose");

//Create the DB Schema
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

//Create a Model/Collection to populate the data with the same name for the schema in the DB
const Task = mongoose.model("Task", taskSchema);

//Export the Model/Collection
module.exports = Task;
