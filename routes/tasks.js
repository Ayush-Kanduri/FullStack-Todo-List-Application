const express = require("express");
const router = express.Router();

const tasksController = require("../controllers/tasks_controller");

router.post("/create", tasksController.createTask);
router.get("/delete", tasksController.deleteTask);
router.get("/delete/completed", tasksController.deleteCompletedTasks);
router.get("/complete", tasksController.completeTask);
router.get("/complete/all", tasksController.completeAllTasks);

module.exports = router;
