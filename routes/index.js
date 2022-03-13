//----------------------------------------------------------------//
//Index Root of all the Routes//
//----------------------------------------------------------------//
//Require the existing Express
const express = require("express");
//Create a Local Router
const router = express.Router();

//Require Home Router File
const homeRouterFile = require("./home");
//Require Tasks Router File
const taskRouterFile = require("./tasks");
//Require Tasks List Router File
const taskListRouterFile = require("./task-list");

//Access the Home Router File on '/' route
router.use("/", homeRouterFile);
//Access the Tasks List Router File on '/task-list' route
router.use("/task-list", taskListRouterFile);
//Access the Tasks Router File on '/tasks' route
router.use("/tasks", taskRouterFile);

//Main Index Router Loaded
console.log("Router Loaded");
//Export the Index Router
module.exports = router;
