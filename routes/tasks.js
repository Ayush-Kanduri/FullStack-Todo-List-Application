//Require the existing Express
const express = require("express");
//Create a Local Router
const router = express.Router();

//Require Tasks Controller
const tasksController = require("../controllers/tasks_controller");

//Access the Tasks Controller's createTask() Function by '/create' route
router.post("/create", tasksController.createTask);
//Access the Tasks Controller's deleteTask() Function by '/delete' route
router.get("/delete", tasksController.deleteTask);
//Access the Tasks Controller's deleteCompletedTasks() Function by '/delete/completed' route
router.get("/delete/completed", tasksController.deleteCompletedTasks);
//Access the Tasks Controller's completeTask() Function by '/complete' route
router.get("/complete", tasksController.completeTask);
//Access the Tasks Controller's completeAllTasks() Function by '/complete/all' route
router.get("/complete/all", tasksController.completeAllTasks);

//Export the Router
module.exports = router;
