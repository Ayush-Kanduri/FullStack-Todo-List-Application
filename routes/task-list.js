const express = require("express");
const router = express.Router();

const homeController = require("../controllers/home_controller");

router.get("/incomplete-tasks", homeController.incompleteTasks);
router.get("/completed-tasks", homeController.completedTasks);

module.exports = router;
