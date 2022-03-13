//Require the Mongoose Library
const mongoose = require("mongoose");

//Connect to the Database
mongoose.connect("mongodb://localhost/todo_list_db");

//Acquire the Connection
const db = mongoose.connection;

//If Error
db.on("error", console.error.bind(console, "connection error"));

//If Successful
db.once("open", () => {
	console.log("Connected to the MongoDB Successfully");
});

//Export the Connection
module.exports = db;
