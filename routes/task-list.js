//Require the existing Express
const express = require("express");
//Create a Local Router
const router = express.Router();

//Require Home Controller
const homeController = require("../controllers/home_controller");

//Access the Home Controller's incompleteTasks() Function by '/incomplete-tasks' route
router.get("/incomplete-tasks", homeController.incompleteTasks);
//Access the Home Controller's completedTasks() Function by '/completed-tasks' route
router.get("/completed-tasks", homeController.completedTasks);

//Export the Router
module.exports = router;
