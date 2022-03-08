const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/todo_list_db");

const db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error"));
db.once("open", () => {
	console.log("Connected to the MongoDB Successfully");
});

module.exports = db;
